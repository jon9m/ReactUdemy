import React, { Component } from 'react';
import allclasses from './App.css';
import Person from './Person/Person';
//Person must start with a capital letter

import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import classNames from 'classnames';

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
        { uniqueid: '1', name: 'malaka', age: 36 },
        { uniqueid: '2', name: 'samara', age: 37 },
        { uniqueid: '3', name: 'nilupa thushari', age: 30 }
      ]
    })
  }
  resetNamehandler = (newName) => {
    this.setState({
      persons: [
        { uniqueid: '1', name: newName, age: 38 },
        { uniqueid: '2', name: 'sam', age: 37 },
        { uniqueid: '3', name: 'nilupa', age: 33 }
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

    let personsDtl = null;
    if (this.state.showPersons) {
      personsDtl = (
        <div>
          {this.state.persons.map((person, index) => {
            /**key has to be on outer element of map method**/
            return <ErrorBoundary key={person.uniqueid}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name} age={person.age}
                onNameChange={(event) => this.nameChangehandler(event, person.uniqueid)}>My name is {person.name}
              </Person>
            </ErrorBoundary>
          })}
        </div>
      )
    }

    return (
      <div className={allclasses.App}>
        <button key="btn1" className={classNames({ [allclasses.btnstyle]: true })} onClick={this.changeNamehandler}>Switch Name</button>
        <button key="btn2" className={allclasses.btnstyle} onClick={this.togglePersons}>Toggle Persons</button>
        {personsDtl}
      </div>
    );
  }
}

export default App;
