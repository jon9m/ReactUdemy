import React from 'react';
import Radium from 'radium';

const person = (props) => {
    let style = {
        margin: '5px auto',
        backgroundColor: '#ccc'
    }
    let btnStyle = {
        float: 'right',
        ':hover': {
            backgroundColor: 'red',
            color: 'black'
        }
    }
    const mediaQuery = {
        '@media(min-width:800px)': {
            width: '750px'
        }
    }

    return (
        <div className="card" style={[style, mediaQuery]}>
            <div>
                <button className="badge badge-light" onClick={props.click} style={btnStyle}>x</button>
            </div>
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

export default Radium(person);