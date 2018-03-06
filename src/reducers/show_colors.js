import { SHOW_COLORS } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case SHOW_COLORS:
      return Object.assign({}, ...state.colorsVisible, {
        colorsVisible: !state.colorsVisible
      });
    default:
    return Object.assign({}, ...state, {
      colorsVisible: false
    });
  }
}