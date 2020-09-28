import React from 'react'
import FilterEl from './filterEl/FilterEl';
import UsersListEL from './users/UsersListEL';
import randomUser from '../api/randomUser';


class App extends React.Component {

  state = {usersList:[], displayedUsersList:[]}

  async componentDidMount(){
    console.log("app mount ####################");
    const response = await randomUser.get('api', {params: {results: 150}});
    const usersList = response.data.results.map(({name, picture, gender}, index) => {
      return {
        id: index,
        firstName: name.first.toLowerCase(),
        lastName: name.last.toLowerCase(),
        pictureUrl: picture.large,
        gender: gender,
      };
    });
    this.setState({usersList, displayedUsersList: usersList});
  }

  filterAvatars = (filterTerm) => {
    if(filterTerm.length === 0){
      this.setState({displayedUsersList: this.state.usersList}, ()=>console.log(this.state.displayedUsersList))
    } else {
    const filterTermRegex = new RegExp(`^${filterTerm}`, 'i');
    const displayedUsersList = this.state.usersList.filter(user => filterTermRegex.test(user.firstName));
    this.setState({displayedUsersList});
    }
  }

  render(){
    console.log("APP render");
    return (
      <div>
        <FilterEl sendInputUpdate={this.filterAvatars}/>
        <UsersListEL displayedUsersList={this.state.displayedUsersList} />
      </div>
    );
  }
}
export default App;