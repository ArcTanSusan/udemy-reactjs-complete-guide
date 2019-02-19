import React, {Component} from 'react';
import Person from '../Persons/Person/Person';

class Persons extends Component {
  render() {
    console.log("[Persons.js] rendering");
    return this.props.persons.map((person, index) => {
      // KEY must be on the outermost element
      return (
        <Person
        click={() => {this.props.clicked(index)}}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => {this.props.changed(event, person.id)}} />
      );
    });
  }
}

export default Persons;
// const persons = (props) => {
//   console.log("[Persons.js] rendering");
//   return props.persons.map((person, index) => {
//     // KEY must be on the outermost element
//     return (
//       <Person
//       click={() => { props.clicked(index)}}
//       name={person.name}
//       age={person.age}
//       key={person.id}
//       changed={(event) => {props.changed(event, person.id)}} />
//     );
//   });
// };

// export default persons;
