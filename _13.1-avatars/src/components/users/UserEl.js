import React from 'react';
import './users.css'

const UserEl = (props) => {
  const {id , firstName, lastName, pictureUrl} = props.user;

  return (
    <div className="user-container">
      <img src={pictureUrl}/>
      <div>{`${firstName} ${lastName}`}</div>
    </div>
  );

}
export default UserEl;