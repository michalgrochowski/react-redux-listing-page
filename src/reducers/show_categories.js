import { SHOW_CATEGORY } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case SHOW_CATEGORY:
      return Object.assign({}, ...state, {
        categoriesVisible: !state.categoriesVisible
      });
    default:
    return Object.assign({}, ...state, {
      categoriesVisible: false
    });
  }
}