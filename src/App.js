import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
//Person must start with a capital letter

class App extends Component {
  state = {
    persons: [
      { name: 'manoj', age: 38 },
      { name: 'sam', age: 37 },
      { name: 'nilupa', age: 33 }
    ]
  }

  changeNamehandler = () => {
    //this.state.persons[0].name = "Malaka"; //Don't do this
    this.setState({
      persons: [
      { name: 'malaka', age: 36 },
      { name: 'samara', age: 37 },
      { name: 'nilupa thushari', age: 30 }
    ]
    })
  }
  resetNamehandler = () => {
    this.setState({
      persons: [
      { name: 'manoj', age: 38 },
      { name: 'sam', age: 37 },
      { name: 'nilupa', age: 33 }
    ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="btn btn-info" onClick={this.changeNamehandler}>Switch Name</button>

        <Person name="sam" age="38"></Person>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My name is jon!!!</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <p>Invoke component click from outside</p>
        <Person clickme={this.resetNamehandler} name={this.state.persons[2].name} age={this.state.persons[2].age}><button className="btn btn-warning">Click Me</button></Person>

      </div>
    );
  }
}

export default App;
