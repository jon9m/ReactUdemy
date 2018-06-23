import React, { PureComponent } from 'react';
import personclasses from './Person.css';

import classNames from 'classnames';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import PropTypes from 'prop-types';

import { MyGlobalState } from '../../App'

class Person extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Person JS] inside constructor', props);
    }

    componentWillMount() {
        console.log('[Person JS] inside componenet will mount');
    }

    componentDidMount() {
        console.log('[Person JS] inside componenet did mount');
        if (this.props.myposition == 0) {
            this.myInputElem.focus();
        }
    }
    render() {
        console.log('[Person JS] inside render method');
        return <div className={classNames({ [personclasses.divStyle]: true, [bootstrap.card]: true })}>
            <div>
                <MyGlobalState.Consumer>
                    {auth => auth ? <span>I am authenticated</span> : null}
                </MyGlobalState.Consumer>
                <button className={classNames({ [personclasses.btnStyle]: true })} onClick={this.props.click}>x</button>
            </div>
            <input
                ref={(inp) => { this.myInputElem = inp }}
                type="text"
                onChange={this.props.onNameChange}
                defaultValue={this.props.name} />
            {
                this.props.name ?
                    <p className={[bootstrap['card-title']]}>Hi from a function to {this.props.name}</p>
                    : 'Hi from a function.'
            }
            {
                this.props.age ?
                    <span className={[bootstrap['card-text']]}>My age is {this.props.age}</span>
                    : null
            }

            <p className="card-text">{this.props.children}</p>
        </div>
    }
}

/*const person = (props) => {
    return (
        <div className={classNames({ [personclasses.divStyle]: true, [bootstrap.card]: true })}>
            <div>
                <button className={classNames({ [personclasses.btnStyle]: true })} onClick={props.click}>x</button>
            </div>
            <input type="text" onChange={props.onNameChange} defaultValue={props.name} />
            {
                props.name ?
                    <p className={[bootstrap['card-title']]}>Hi from a function to {props.name}</p>
                    : 'Hi from a function.'
            }
            {
                props.age ?
                    <span className={[bootstrap['card-text']]}>My age is {props.age}</span>
                    : null
            }

            <p className="card-text">{props.children}</p>
        </div>
    );
}*/

Person.PropTypes = {
    onNameChange: PropTypes.func,
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default Person;