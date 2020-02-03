// A component is just a javascript function which returns some JSX
import React from 'react';
import './Person.css'
import Radium from 'radium';

class Person extends React.Component {

   render(){
    console.log('[Person.js] rendering...')
    // adding media query
    const style = {
        '@media (min-width: 500px)':{
            width:'450px',
        }
    }

    return (
        <div className="Person" style={style}>
            <h1 onClick={this.props.click}>I am {this.props.name}, I am {this.props.age} years old </h1>
            <p>{this.props.children}</p>
            {/* this is call two way binding */}
            <input type='text'  onChange={this.props.change} value={this.props.name}/>
        </div>
    )
   }
}

export default Radium(Person);
// export default person