import React, {useEffect} from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  useEffect(() => {
    // http request here.
    console.log("[Cockpit.js] useEffect")
  });
  const assignedClasses  = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
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
      <button className={btnClass} onClick={props.toggle}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;
