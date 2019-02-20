import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // http request here.
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  // FYI: you can have multiple useEffects to keep track of more states.
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    // http request here.
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses  = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi im a react app named {props.title}</h1>
      <p className={assignedClasses.join(' ')}> This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.toggle}>Toggle Persons</button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
