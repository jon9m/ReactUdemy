import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
//Person must start with a capital letter

import Radium, { StyleRoot } from 'radium';

class App extends Component {

  state = {
    persons: [
      { uniqueid: '1', name: 'manoj', age: 38 },
      { uniqueid: '2', name: 'sam', age: 37 },
      { uniqueid: '3', name: 'nilupa', age: 33 }
    ],
    showPersons: true
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
  resetNamehandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 38 },
        { name: 'sam', age: 37 },
        { name: 'nilupa', age: 33 }
      ]
    })
  }

  nameChangehandler = (event, id) => {
    const persons = [...this.state.persons];  //copy

    const currPersonIndex = persons.findIndex((person) => {
      if (person.uniqueid === id) {
        return true;
      }
    });
    const person = {
      ...this.state.persons[currPersonIndex]   //copy 
    }

    person.name = event.target.value;
    persons[currPersonIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersons = () => {
    let currState = this.state.showPersons;
    this.setState({ showPersons: !currState });
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice;   //Always use a copy of original data 
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons })
  }

  render() {
    let style = {
      backgroundColor: '#ccc'
    }
    let btnstyle = {
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'pink'
      }
    }

    let personsDtl = null;
    if (this.state.showPersons) {
      personsDtl = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.uniqueid}
              click={() => this.deletePersonHandler(index)}
              name={person.name} age={person.age}
              onNameChange={(event) => this.nameChangehandler(event, person.uniqueid)}>My name is {person.name}</Person>
          })}
        </div>
      )
      style.backgroundColor = '#F00';
      btnstyle[':hover'] = {
        backgroundColor: 'black',
        color: 'red'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          <button key="btn1" className="btn btn-info m-1" onClick={this.changeNamehandler} style={btnstyle}>Switch Name</button>
          <button key="btn2" className="btn btn-info" onClick={this.togglePersons} style={[style, btnstyle]}>Toggle Persons</button>
          {personsDtl}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
