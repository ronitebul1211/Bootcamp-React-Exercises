import React from 'react';
import UserEl from './UserEl';
import './users.css'

const UsersListEl = (props) => {

  function getUsersElList(){

    return props.displayedUsersList.map(userData => <UserEl key={userData.id} user={userData}/>);
    
  }

  return (
    <div className="user-list-container">
      <div className="users-list-wrapper">
      {getUsersElList()}
      </div>
    </div>
  )
}

export default UsersListEl;