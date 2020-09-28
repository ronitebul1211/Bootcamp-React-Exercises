import React from 'react';
import './users/users.css'
import UserDetailsForm from './reusable/UserDetailsForm';

/**
Profile Edit View:

Props: 
1. userData 
2. updateDataChange: reference to onDataChange callback in ProfilePage 
3. updateProfileCardView: reference to setProfileCardView callback in ProfileCard

Functionality:
# Back: invoke in Card Profile setProfileCardView with Profile View
# Save: invoke in Profiles Page onDataChange with PUT action (update existing record)

*/

class ProfileEditView extends React.Component {
  render() {
    return (
      <UserDetailsForm
        formMode="editUser"
        userData={this.props.userData}
        updateDataChange={this.props.updateDataChange}
        updateProfileCardView={this.props.updateProfileCardView}/>
    );
  }
}

export default ProfileEditView;