import React from 'react';
import mockApi from '../api/mockApi';
import ProfilesList from '../components/ProfilesList';
import AddNewProfileView from '../components/AddNewProfileView';

/**
 Profiles Page:

 Logic: -> Get users from endpoint 
        -> Post update on endpoint
        -> Delete user on endpoint
        -> Create user in endpoint
  
  when user data change, correspond callback in ProfilePage get called,
  in each callback implement:
  1. Endpoint action (POST / UPDATE / DELETE)
  2. Get users from endpoint 
  3. Set state with updates users array

  Render:
  ProfilesList: pass in -> users array (state)
                        -> onDataChange() ref - to update ProfilePage when data change
 */

class ProfilesPage extends React.Component {

  state = {usersData: []}

  async componentDidMount(){
    this.fetchAndSetUsersDataToState()
  }

  onDataChange = async (action, userData) => {
    switch(action){
      case 'delete':
        await mockApi.delete(`users/${userData.id}`);
        break;
      case 'update':
        await mockApi.put(`users/${userData.id}`, userData);
        break;
      case 'create':
        await mockApi.post('users', userData);
        break;
      default:
        console.log("Error");
        break;
    }
    this.fetchAndSetUsersDataToState();
  }

  fetchAndSetUsersDataToState = async () => {
    const response = await mockApi.get('users');
    const usersData =  response.data;
    this.setState({usersData});
  }

  render(){  
    return (
      <div>
        <AddNewProfileView
          updateDataChange={this.onDataChange}/>
        <ProfilesList 
          usersData={this.state.usersData}
          updateDataChange={this.onDataChange}/>
      </div>
    )
  }
}

export default ProfilesPage;
