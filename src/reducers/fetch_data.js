import { FETCH_DATA } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_DATA:
    return Object.assign({}, ...state, {
      data: action.data.products
    });
    default:
      return state;
  }
}