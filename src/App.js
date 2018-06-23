import React, { PureComponent } from 'react';
import allclasses from './App.css';
import Persons from './Persons/Persons';
//Person must start with a capital letter

import classNames from 'classnames';

export const MyGlobalState = React.createContext(false); 


// class App extends Component {
class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App JS] inside constructor', props);
  }

  componentWillMount() {
    console.log('[App JS] inside componenet will mount');
  }

  componentDidMount() {
    console.log('[App JS] inside componenet did mount');
  }

  state = {
    persons: [
      { uniqueid: '1', name: 'manoj', age: 38 },
      { uniqueid: '2', name: 'sam', age: 37 },
      { uniqueid: '3', name: 'nilupa', age: 33 }
    ],
    showPersons: true,
    authenticated: false
  }

  changeNamehandler = () => {
    //this.state.persons[0].name = "Malaka"; //Don't do this
    this.setState({
      persons: [
        { uniqueid: '1', name: 'malaka', age: 36 },
        { uniqueid: '2', name: 'samara', age: 37 },
        { uniqueid: '3', name: 'nilupa thushari', age: 30 }
      ],
      authenticated: true
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
    console.log('[App JS] inside render method');

    let personslist = null;
    if (this.state.showPersons) {
      personslist = <Persons nameChangehandler={this.nameChangehandler} deletePersonHandler={this.deletePersonHandler} showPersons={this.state.showPersons} persons={this.state.persons}></Persons>
    }

    return (
      <div className={allclasses.App}>
        <button key="btn1" className={classNames({ [allclasses.btnstyle]: true })} onClick={this.changeNamehandler}>Switch Name</button>
        <button key="btn2" className={allclasses.btnstyle} onClick={this.togglePersons}>Toggle Persons</button>
        <MyGlobalState.Provider value={this.state.authenticated}>
          {personslist}
        </MyGlobalState.Provider>
      </div>
    );
  }
}

export default App;
