import React from 'react';
import personclasses from './Person.css';

import classNames from 'classnames';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const person = (props) => {
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
}

export default person;