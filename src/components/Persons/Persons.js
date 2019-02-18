import React from 'react';
import Person from '../Persons/Person/Person';

const persons = (props) => (
  props.persons.map((person, index) => {
    // KEY must be on the outermost element
    return <Person
      click={() => { props.clicked()}}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={(event) => {props.changed(event, person.id)}} />
  })
);

export default persons;
