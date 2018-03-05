import data from './fetch_data.js';
import filterItems from './filter_items.js';

const rootReducer = {
  data: data,
  options: filterItems,
};

export default rootReducer;