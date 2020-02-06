// A component is just a javascript function which returns some JSX
import React from 'react';
import './Person.css';
import Radium from 'radium';
import Aux from '../../../hoc/Auxiliary';
import WithClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends React.Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
    }

    // Alternative and more convenient way of using AuthContext
    static contextType = AuthContext

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
                {/* <AuthContext.Consumer>
                    {(context) => context.isAuthenticated ? <p>Authenticated!</p> : <p>Please login</p>}
                </AuthContext.Consumer> */}
                {this.context.isAuthenticated ? <p>Authenticated!</p> : <p>Please login</p>}
                <h1 onClick={this.props.click}>I am {this.props.name}, I am {this.props.age} years old </h1>
                <p>{this.props.children}</p>
                <input 
                    type='text'  
                    onChange={this.props.change} 
                    value={this.props.name}
                    // ref={(inputElement)=>{this.inputElement = inputElement}}
                    ref ={this.inputElementRef}
                />
            </div>
        )
    }
}

Person.propTypes = {
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    change:PropTypes.func
}

export default Radium(Person);
// export default person