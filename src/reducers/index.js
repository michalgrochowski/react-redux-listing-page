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
  areBagsChecked: bagsChecked,
  areBeltsChecked: beltsChecked,
  areWalletChecked: walletsChecked
};

export default rootReducer;