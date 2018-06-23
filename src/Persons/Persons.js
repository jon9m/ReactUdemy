import React, { PureComponent } from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[Persons JS] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Persons JS] inside componenet will mount');
    }

    componentDidMount() {
        console.log('[Persons JS] inside componenet did mount');
    }

    render() {
        console.log('[Persons JS] inside render method');

        return this.props.persons.map(
            (person, index) => {
                return <ErrorBoundary key={person.uniqueid}>
                    <Person
                        myposition={index}
                        click={() => this.props.deletePersonHandler(index)}
                        name={person.name} age={person.age}
                        onNameChange={(event) => this.props.nameChangehandler(event, person.uniqueid)}>My name is {person.name}
                    </Person>
                </ErrorBoundary>
            }
        );
    }
}

export default Persons;