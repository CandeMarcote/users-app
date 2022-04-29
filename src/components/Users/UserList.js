import React from 'react';
import User from './User';

const UserList = ({users}) => {

  return (
    <div>
        {users.map(user => {
            return <User name={user.name} age={user.age} key={user.id} />
        })}
    </div>
  )
}

export default UserList