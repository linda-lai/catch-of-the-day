import React, { Component, Fragment} from 'react';

class StorePicker extends Component {
  render() {
    return(
    <Fragment>
      <form className="store-selector">
        <h2>OH HEY GURL</h2>
        <input type="text" placeholder="Store Name" required />
        <button type="submit">Visit Store</button>
      </form>
    </Fragment>
    )
  } 
}

export default StorePicker;