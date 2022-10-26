import { Component } from 'react';
import './App.css';

export class App extends Component {
  state = {
    person: null
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({person: data.results[0]});
    console.log('hey)')
  }

  render() {
    return ( 
      <div>
        { !this.state.person ? <p>Loading...</p> : 
          <div>
            <h1>Random User</h1>
            <img src={this.state.person.picture.large} alt="person" className="photo"/>
            <p>{this.state.person.name.first} {this.state.person.name.last}, {this.state.person.dob.age} years old</p>
            <p>Location: {this.state.person.location.country}, {this.state.person.location.city}</p>
            <p>E-mail: {this.state.person.email}</p>
            <p>Tel.: {this.state.person.phone}</p>
          </div>
        }
      </div>
    )
  }
}
export default App;
