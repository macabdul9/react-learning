// A component is just a javascript function which returns some JSX
import React from 'react';
const person = (props) =>{
    return (
        <div>
            <h1>I am {props.name}, I am {props.age} years old </h1>
            <p>{props.children}</p>
        </div>
    )
}

export default person;