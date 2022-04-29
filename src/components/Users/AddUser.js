import React, { useState } from 'react';
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        if (userName.trim().length === 0) {
            setError(true)
            return;
        }

        props.onAddUser(userName, userAge)
        setUserName('')
        setUserAge('')
    }
    
    const changeNameHandler = (event) => {
        setUserName(event.target.value)
    }
    
    const changeAgeHandler = (event) => {
        setUserAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

  return (
    <div>
        {error ? <ErrorModal onConfirm={errorHandler} /> : (
        <form onSubmit={addUserHandler}>
            <label htmlFor="userNameinput">Name</label>
            <input type="text" value={userName} onChange={changeNameHandler} placeholder="Enter a name"/>
            <label htmlFor="userAgeinput">Age</label>
            <input type="number" step={1} min={1} value={userAge} onChange={changeAgeHandler} placeholder="Enter a number"/>
            <button type="submit">Add user</button>
        </form>
        )}
    </div>
  )
}

export default AddUser