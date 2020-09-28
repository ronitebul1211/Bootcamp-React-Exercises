import React from 'react';
import ProfileCard from './ProfileCard';
import './users/users.css'
/**
Profiles List:

Props: 
1. usersData
2. updateDataChange: reference to onDataChange callback in ProfilePage

UI Logic: 
1. renderProfilesList: map each element in user array as ProfileCard component 

Render:
1. Profile list container populate with ProfileCards (pass in: userData, updateDataChange Ref)
//TODO : this.props.userList === null ? SpinnerTODO: 
*/

class ProfilesList extends React.Component {

  renderProfilesList = () => {
    const profilesList =  this.props.usersData.map(userData => {
      return (
        <ProfileCard 
          key={userData.id} 
          userData={userData} 
          updateDataChange={this.props.updateDataChange}/>
      );
    });
    return profilesList;
  }

  render() {
    return (
      <div className="user-list-container">
        <div className="users-list-wrapper">
        {this.renderProfilesList()}
        </div>
      </div>
    )
  }
}

export default ProfilesList;