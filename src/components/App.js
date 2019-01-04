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
    // Persistent storage through Firebase
    fishes: {},
    // Persistent storage through Local Storage, storing in the browser
    order: {}
  };

  // Firebase will link to the database in real time whenever the component is mounted
  componentDidMount() {
    const { params } = this.props.match;
    // Check and reinstate our Local Storage if it exists whenever component is mounted so it doesn't keep resetting
    const localStorageRef = localStorage.getItem(params.storeId);
    // If there is a localStorageRef, update order object (convert from string back to object)
    if(localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
    console.log("COMPONENT DID MOUNT!")
  }

  // Invoked immediately after update occurs
  componentDidUpdate() {
    console.log(this.state.order)
    // The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.
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

  updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current state
    const fishes = { ...this.state.fishes };
    // 2. Update that state
    fishes[key] = updatedFish;
    // 3. Set that to state
    this.setState({ fishes })
  }

  deleteFish = (key) => {
    // 1. Take a copy of state
    const fishes = { ...this.state.fishes };
    // 2. Update the state (remove an entry, as Firebase needs it to be set to null)
    fishes[key] = null;
    // 3. 
    this.setState({ fishes });
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes})
  };

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Add that item to order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  removeFromOrder = key => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Remove that item from order 
    delete order[key]
    // 3. Call setState to update our state object
    this.setState({ order })
  }

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
            removeFromOrder={this.removeFromOrder}
          />
          <Inventory
            addFish={this.addFish}
            updateFish={this.updateFish}
            deleteFish={this.deleteFish}
            loadSampleFishes={this.loadSampleFishes}
            fishes={this.state.fishes}
          />
      </div>
    )
  }
}

export default App;