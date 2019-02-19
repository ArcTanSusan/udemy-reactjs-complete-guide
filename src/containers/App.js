import React, { Component } from 'react';
import './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    // Optional set state with self.state = {} for older react versions.
  };

  state = {
    persons: [
      { id: '129', name: 'Max', age: 28 },
      { id: '192', name: 'Manu', age: 29 },
      { id: '82192', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  static getDrivedStateFromProps(props, state) {
    console.log("[App.js] getDrivedStateFromProps", props, state)
    return state;
  };

  // componentWillMount will be removed in future.
  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // };
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  };
  shouldComponentUpdate(nextProps, nextState) {
    // for performance improvements
    console.log("[App.js] shouldComponentUpdate");
    return true;
  };
  componentDidUpdate() {
    // for fetching data from server
    console.log("[App.js] componentDidUpdate");
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // ES6 way:
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons:persons
    });
  };

  nameChangedHandler = (event, personID) => {
    const personIndex = this.state.persons.findIndex(p => {return p.id == personID});
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />;
    };

    return (
      <div className="App">
        <Cockpit title={this.props.appTitle} toggle={this.togglePersonsHandler} persons={this.state.persons} showPersons={this.state.showPersons}/>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
