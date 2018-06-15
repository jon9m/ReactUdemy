import React from 'react';
const person = (props) => {
    let style = {
        width: '30rem',
        margin: '5px auto',
        backgroundColor: '#ccc'
    }

    return (
        <div onClick={props.clickme} className="card my7" style={style}>
            <input type="text" onChange={props.onNameChange} defaultValue={props.name}/>
            <p className="card-title">Hi from a function to {props.name}</p>
            <span className="card-text">my age is {props.age}</span>
            <p className="card-text">{props.children}</p>
        </div>
    );
}

export default person;