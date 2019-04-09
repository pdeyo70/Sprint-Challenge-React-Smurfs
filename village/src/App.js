import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route } from 'react-router-dom';
import { Link as NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
        .then(res => this.setState({smurfs: res.data}) )
        .catch((err) => console.log("A mistake has been made!", err))
  }

  componentDidUpdate(prevState){
    if (prevState.name !== this.state.name){
      axios.get('http://localhost:3333/smurfs')
        .then(res => this.setState({smurfs: res.data}) )
        .catch((err) => console.log("A mistake has been made!", err))
    }
  }

  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/smurf-form">Add a Smurf</NavLink>
          </li>
        </ul>

        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route path="/smurf-form" component= { SmurfForm } />
      </div>
    );
  }
}

export default App;
