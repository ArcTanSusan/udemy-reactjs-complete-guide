import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = props  => {
  const [personsState, setPersonsState] = useState({
      persons: [
        {'name': 'Max', 'age': 28},
        {'name': 'Manu', 'age': 30},
        {'name': 'Steph', 'age': 26},
      ],
      otherState: 'some other state here!'
  });
  // state =  {
  //   persons: [
  //     {'name': 'Max', 'age': 28},
  //     {'name': 'Manu', 'age': 30},
  //     {'name': 'Steph', 'age': 26},
  //   ]
  // }
  // console.log(personsState);
  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState);

  const switchNameHandler = () => {
    // console.log("was clicked");
    // this.state.persons[0].name = 'Maximillian'; DONT DO THIS
    setPersonsState(
      {persons:[
        {'name': 'Maximillian', 'age': 28},
        {'name': 'Manu', 'age': 30},
        {'name': 'Steph', 'age': 27}
      ],
       otherState: personsState.otherState + " MEOW!"
      });
  };

    return (
      <div className="App">
        <h1> Hi, I'm a react app. </h1>
        <p> This is really working!</p>
        <button onClick={switchNameHandler}> Switch name </button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> my hobbies: racing </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    // return React.createElement('div',{'className': 'App'}, React.createElement('h1', null, "Hi im a react app!"));
}

export default app;
