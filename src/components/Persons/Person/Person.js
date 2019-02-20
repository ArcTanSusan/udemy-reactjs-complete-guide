import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from "./Person.module.css";
import withClass  from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    // with contextType set, we can access this.context set in auth-context.js.
    console.log(this.context.authenticated);
  };

  render() {
    console.log("[Person.js] rendering");
      return (
        <Aux>
          {this.context.authenticated ? <p>Authenticated.</p> : <p>Logged out.</p>}
          <p key="i1" onClick={this.props.click}>I'm {this.props.name}. I'm {this.props.age} yrs old!</p>
          <p key="i2">{this.props.children}</p>
          <input
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
        </Aux>
      );
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);

// const person = (props) => {
//   const style = {
//     '@media (min-width:500px)': {
//       width: '450px'
//     }
//   }
//   console.log("[Person.js] render")
//   return (
//     <div style={style}>
//     <p onClick={props.click}>I'm {props.name}. I'm {props.age} yrs old!</p>
//     <p>{props.children}</p>
//     <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   )
// };

// export default person;
