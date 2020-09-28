import React from 'react';
import axios from 'axios';
import SelectMenu from './SelectMenu';
import JokeContainer from './JokeContainer';


// import chuckNorris from '../api/chuckNorris';

class App extends React.Component {

  state = {selectedCategory:'label', isGetJokeClicked: false, joke:''};

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({isGetJokeClicked: true});
    //Fetch JOKE
    let baseUrl = '';
    this.state.selectedCategory === 'label'
    ? baseUrl = 'https://api.chucknorris.io/jokes/random'
    : baseUrl = `https://api.chucknorris.io/jokes/random?category=${this.state.selectedCategory}`
    const response = await axios.get(baseUrl);
    const joke = response.data.value;
    this.setState({joke});
  }

  updateForm = (selectedCategory) => {
    this.setState({selectedCategory}); //Destructuring 
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <SelectMenu selectedItem={this.state.selectedCategory} updateForm={this.updateForm}/>
          <button type="submit">Get Joke</button>
        </form>
        {this.state.isGetJokeClicked && <JokeContainer joke={this.state.joke}/>}
      </div>
    );
  }
}

export default App;