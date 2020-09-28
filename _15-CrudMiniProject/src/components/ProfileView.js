import React from 'react';
import './users/users.css'

/**
Profile View:

Props: 
1. userData 
2. updateDataChange: reference to onDataChange callback in ProfilePage
3. updateProfileCardView: reference to setProfileCardView callback in ProfileCard

Functionality:
# Edit: invoke in Card Profile setProfileCardView with Edit View
# Delete: invoke in Profiles Page onDataChange with Delete action
*/

class ProfileView extends React.Component {

  onEditClick = () => {
    this.props.updateProfileCardView('editView');
  }

  onDeleteClick = () => {
    this.props.updateDataChange('delete', this.props.userData);
  }

  render(){
    return(
      <div>
        <div className="img-container">
          <img src={this.props.userData.imgUrl} alt="user avatar"/>
        </div>
        <div>
          {`${this.props.userData.firstName} ${this.props.userData.lastName}`}
        </div>
        <div className="btn-base-mode-container">
          <button className="btn" onClick={this.onEditClick}>EDIT</button>
          <button className="btn" onClick={this.onDeleteClick}>DELETE</button>
        </div>
      </div>
    );
  }
}

export default ProfileView;