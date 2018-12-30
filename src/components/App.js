import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import { formatPrice } from '../helpers';
import base from '../base';

class App extends React.Component {
  state = {
    // Persistent storage through Firebire
    fishes: {},
    // Persistent storage through Local Storage, storing in the browser
    order: {}
  };

  // Firebase will link to the database in real time whenever the component is mounted
  componentDidMount() {
    const { params } = this.props.match;
    // First, reinstate our Local Storage
    const localStorageRef = localStorage.getItem(params.storeId);
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
    console.log("COMPONENT DID MOUNT!")
  }

  componentDidUpdate() {
    console.log(this.state.order)
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
    console.log("COMPONENT DID UPDATE!")
  }

  // Firebase will unmount the component cleanly whenever the URL changes
  componentWillUnmount() {
    base.removeBinding(this.ref)
    console.log("COMPONENT UNMOUNTED!")
  };

  addFish = (fish) => {
    // 1. Take a copy of the existing state using an object spread
    const fishes = {...this.state.fishes};
    // 2. Add our new fish to the fishes copy
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes})
  };

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
          {/* Object.keys => Transforms object into an array, with the object keys as array values  */}
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
          <Order
            fishes={this.state.fishes}
            order={this.state.order}
          />
          <Inventory
            addFish={this.addFish}
            loadSampleFishes={this.loadSampleFishes}
          />
      </div>
    )
  }
}

export default App;