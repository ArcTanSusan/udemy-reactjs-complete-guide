import React, {Component} from 'react';
import "./Person.module.css";


class Person extends Component {
  render() {
    console.log("[Person.js] rendering");
      return (
        <div>
        <p onClick={this.props.click}>I'm {this.props.name}. I'm {this.props.age} yrs old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
      )
  }
};
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
export default Person;
