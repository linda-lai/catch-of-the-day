import React, { Component, Fragment} from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  // // Constructor method will run before a new component is created
  // constructor() {
  //   super();
  //   console.log("Gonna create a component...")
  //   // Unless 'this' is bound to the new goToStore event instance, 'this' will show as undefined
  //   this.goToStore = this.goToStore.bind(this);
  // }

  myInput = React.createRef();

  // 'this' can be bound using arrow functions instead of constructor
  // Must be used when a custom method needs to access 'this'
  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from the form input
    console.log(this);
    // 3. Change the page to /store/user-input
  }
  render() {
    return(
    <Fragment>
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>OH HEY GURL</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    </Fragment>
    )
  } 
}

export default StorePicker;