import React from 'react';
const person = (props) => {
    let style = {
        width: '30rem',
        margin: '5px auto',
        backgroundColor: '#ccc'
    }

    return (
        <div onClick={props.click} className="card" style={style}>
            <input type="text" onChange={props.onNameChange} defaultValue={props.name} />
            {
                props.name ?
                    <p className="card-title">Hi from a function to {props.name}</p>
                    : 'Hi from a function.'
            }
            {
                props.age ?
                    <span className="card-text">My age is {props.age}</span>
                    : null
            }

            <p className="card-text">{props.children}</p>
        </div>
    );
}

export default person;