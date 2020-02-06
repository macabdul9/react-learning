import React, { createRef, useContext} from 'react'
import Radium from 'radium'
import './Cockpit.css'
import AuthContext from '../../context/auth-context'


const cockpit = function Cockpit(props){

  // React.useEffect(() => {
  //   console.log('[Cockpit..js] useEffect')
  //   // http request
  //   setTimeout(()=>{
  //     alert('data saved to cloud')
  //   }, 1000)
  // }, props.persons)
  const toggleBtnRef = createRef();

  // Alternative way of using AuthContext in function component using hooks 
  const authContext = useContext(AuthContext)

  React.useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    setTimeout(()=>{
      alert('data saved into cloud')
    }, 1)
    toggleBtnRef.current.click();
    return ()=>{
      console.log('[cockpit.js] cleanup work in useEffect');
    };
  }, []);

  // Applying dynamic classes
  let classes = []
  let len = props.personsLength
  if(len <=2){
      classes.push('red'); // red class
  }
  if(len <= 1){
      classes.push('bold') // red, bold classes
  }

    //inline css applied on button
  const style ={
      backgroundColor:'green',
      border:'2px solid blue',
      font:'inherit',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
  }
  if (props.showPersons){
      style.backgroundColor="red";

      style[':hover']={
        backgroundColor:'salmon',
        color:'black'
      }

  }

  return (
      <div>
        <h3 className={classes.join(' ')}>Person Manager</h3>
        <button
        onClick={props.clicked}
        style={style}
        ref={toggleBtnRef}>Toggle Name</button>
        {/* <AuthContext.Consumer>
          {(context) => <button onClick={context.login} style={style} key={'124'}>Login</button>}
        </AuthContext.Consumer> */}
        <button onClick={authContext.login} style={style} key={'124'}>Login</button>
      </div>
  );
}

export default Radium(cockpit);
