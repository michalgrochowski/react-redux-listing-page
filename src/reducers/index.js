import data from './fetch_data';
import showCategories from './show_categories';
import showColors from './show_colors';
import bagsChecked from './bags_checked';
import beltsChecked from './belts_checked';
import walletsChecked from './wallets_checked';

const rootReducer = {
  data: data,
  categoriesVisible: showCategories,
  colorsVisible: showColors,
  bagsChecked: bagsChecked,
  beltsChecked: beltsChecked,
  walletChecked: walletsChecked
};

export default rootReducer;