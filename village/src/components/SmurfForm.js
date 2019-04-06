import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    console.log(this.state.name)
    if (this.state.name)
      axios
        .post("http://localhost:3333/smurfs", {
          name: this.state.name,
          age: this.state.age,
          height: this.state.height
        })
        .then(response => {
          this.setState({
            smurfs: response.data,
            name: "",
            age: "",
            height: ""
          });
        })
        .catch(err => console.log("A mistake has been made!", err));

    /*this.setState({
      name: '',
      age: '',
      height: ''
    });*/
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
