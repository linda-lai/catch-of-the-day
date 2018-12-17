import React from 'react';

import StorePicker from './components/StorePicker';

class App extends React.Component {
  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Inventory />
        <Order />
      </div>
    )
  }
}

export default App;