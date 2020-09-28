import React from 'react';
import UserDetailsForm from './reusable/UserDetailsForm';


/**
Add New Profile View:

Props: 
1. updateDataChange: reference to onDataChange callback in ProfilePage

Functionality:
# ADD: invoke in Profiles Page onDataChange with POST action (create record)

*/

class AddNewProfileView extends React.Component{

  render(){
    return (
     <UserDetailsForm
      formMode="createUser"
      updateDataChange={this.props.updateDataChange}/>
    )
  }
}

export default AddNewProfileView