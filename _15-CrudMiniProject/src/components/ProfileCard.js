
import React from 'react';
import ProfileView from './ProfileView';
import ProfileEditView from './ProfileEditView';
import './users/users.css'

/**
Props: 
1. userData 
2. updateDataChange: reference to onDataChange callback in ProfilePage

Render card view base on View Mode : Profile View / Edit View
**/

class ProfileCard extends React.Component {
  
  state = {viewMode: 'profileView'}

  /** Callback Function: to set card view mode: profileView / editView */
  setProfileCardView = (viewMode) => {
    this.setState({viewMode}, );
  }

  /** Return Component By View Mode state: Profile View / Edit View  */
  renderProfileCardView = () => {
    switch(this.state.viewMode) {
      case 'profileView':
        return (
          <ProfileView 
            userData={this.props.userData}
            updateDataChange={this.props.updateDataChange}
            updateProfileCardView={this.setProfileCardView}/>
        );
      case 'editView':
        return (
          <ProfileEditView
            userData={this.props.userData}
            updateDataChange={this.props.updateDataChange}
            updateProfileCardView={this.setProfileCardView}/>
        );
      default:
        console.log("Error");
        return null;
    }
  }

  render(){
    return (
      <div className="user-container">
        {this.renderProfileCardView()}
      </div>
    );
  }
}
export default ProfileCard;

