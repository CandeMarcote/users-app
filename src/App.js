import React, { useState } from 'react';
import AddUser from './components/Users/AddUser.js';
import UserList from './components/Users/UserList.js';

function App() {

  const [users, setUsers] = useState([
      {
        name: "Carlos",
        age: 45,
        id: Math.random()
      },
      {
        name: "Marcos",
        age: 49,
        id: Math.random()
      },
      {
        name: "Carla",
        age: 4,
        id: Math.random()
      },
      {
        name: "Julio",
        age: 43,
        id: Math.random()
      }
    ])

    const addUserHandler = (uName, uAge) => {
      setUsers((prevUsers) => {
        return [
          ...prevUsers,
          { name: uName, age: uAge, id: Math.random().toString() },
        ];
      });
    };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users}/>
    </div>
  );
}

export default App;
