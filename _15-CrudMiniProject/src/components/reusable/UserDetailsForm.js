
import React from 'react';

/**
User Details Form:

- Edit Mode -------------------------------------------------------------------------------------------------------------------------
Props: 
1. formMode -> pass in 'editUser'
2. userData 
3. updateDataChange: reference to onDataChange callback in ProfilePage 
4. updateProfileCardView: reference to setProfileCardView callback in ProfileCard

Functionality:
# Back: invoke in Card Profile setProfileCardView with Profile View
# Save: invoke in Profiles Page onDataChange with PUT action (update existing record)

- Create Mode -------------------------------------------------------------------------------------------------------------------------
Props: 
1. formMode -> pass in -> 'createUser'
2. updateDataChange: reference to onDataChange callback in ProfilePage

Functionality:
# ADD: invoke in Profiles Page onDataChange with POST action (create record)


*/

class UserDetailsForm extends React.Component {

  state = {id:'', firstName: '', lastName: '', imgUrl: ''}

  /** Initialize state base on Form Mode */
  componentDidMount(){
    if (this.props.formMode === 'editUser'){
      const {id, firstName, lastName, imgUrl} = this.props.userData;
      this.setState({id, firstName, lastName, imgUrl})
    }
  }

  /** Controlled form state */
  onInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({[inputName]: inputValue})
  }

  /** Handle submit Base on Form Mode  */
  onSubmitEvent = (event) => {
    event.preventDefault();

    if (this.isFormValid()){
      const formMode = this.props.formMode;
      const updatedUserData = {...this.state};
      console.log(this.isFormValid());

      switch(formMode){
        case 'editUser':
          this.props.updateDataChange('update', updatedUserData);
          this.props.updateProfileCardView('profileView');
          break;
        case 'createUser':
          this.props.updateDataChange('create', updatedUserData);
          this.setState({id:'', firstName: '', lastName: '', imgUrl: ''});
          break;
        default:
          console.log("Error");
      }
    } else {
      console.log("I don't have power to create alert -> so i log it fot you michael ;)");
    }
    
  }

  /** Edit Mode -> handle Back action */
  onBackClick = () => {
    this.props.updateProfileCardView('profileView');
  }


  isFormValid = () => {
    const {firstName, lastName, imgUrl} = this.state;
    const imgPatternRegex = /\w+\.(jpg|jpeg|gif|png|bmp)$/gi;
    return firstName.length >= 2 && lastName.length >= 2 && imgUrl.match(imgPatternRegex)
  }

  /** Render action Btn base on Form Mode */
  renderActionBtn = () => {
    const formMode  = this.props.formMode;
    switch(formMode){
      case 'editUser':
        return(
          <div>
            <button className="btn" type="submit">SAVE</button>
            <button className="btn" type="button" onClick={this.onBackClick}>BACK</button>
          </div>
        );
      case 'createUser':
        return (
          <div>
            <button className="btn" type="submit">ADD</button>
          </div>
        );
      default:
        console.log('Error');
        return null;
    }
  }

  render(){
    return(
      <form className="user-details-form-container" onSubmit={this.onSubmitEvent}>
        <div>
          <label>First Name</label>
          <input 
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.onInputChange}/>
        </div>
        <div>
          <label>Last Name</label>
          <input 
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.onInputChange}/>
        </div>
        <div>
          <label>Image URL</label>
          <input 
            name="imgUrl"
            type="text"
            value={this.state.imgUrl}
            onChange={this.onInputChange}/>
        </div>
        {this.renderActionBtn()}
        
     </form>
    );
  }

}

export default UserDetailsForm;