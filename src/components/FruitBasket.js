import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({updateFilterCallback, currentFilter, fruit, filters}) =>

  <div className="fruit-basket">
    <Filter handleChange={updateFilterCallback} filters={filters}/>
    <FilteredFruitList filter={currentFilter} fruit={fruit}/>
  </div>

  FruitBasket.defaultProps = {
    updateFilterCallback: function () {},
    currentFilter: null,
    fruit: null,
    filters: null
  }

export default FruitBasket;
