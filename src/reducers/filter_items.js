import { FILTER_ITEMS } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FILTER_ITEMS:
      return Object.assign({}, ...state, {
        options: action.isDropdownVisible
      });
    default:
    return Object.assign({}, ...state, {
      options: false
    });
  }
  return state;
}