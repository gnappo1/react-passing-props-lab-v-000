import React, { Component }  from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentFilter: null,
      fruit: [],
      filters: []
    };
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruits => this.setState({ fruits }));
  }

  updateFilterCallback = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.updateFilterCallback}
        fruit ={this.state.fruit}
        filters = {this.state.filters}
      />
    );
  }
}

export default App;
