import data from './fetch_data.js';
import showCategories from './show_categories.js';
import showColors from './show_colors.js';

const rootReducer = {
  data: data,
  categoriesVisible: showCategories,
  colorsVisible: showColors,
};

export default rootReducer;