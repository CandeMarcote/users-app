import React, {useState} from 'react';

const AddUser = () => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [savedUser, setSavedUser] = useState({
        name: '',
        age: '',
        id: ''
    });

    const changeNameHandler = (event) => {
        setUserName(event.target.value)
    }
    
    const changeAgeHandler = (event) => {
        setUserAge(event.target.value)
    }
    const addUserHandler = (event) => {
        event.preventDefault()
        const user = {
            name: userName,
            age: userAge,
            id: Date.now().toString()
        }
        
        setSavedUser(prevState=> {
            return{
                ...prevState,
                user
            }
        })
        console.log(user)
        console.log(savedUser)
    }

  return (
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={changeNameHandler}/>
        <label htmlFor="age">Age</label>
        <input type="number" id="age"  min={0} step={1} onChange={changeAgeHandler}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default AddUser