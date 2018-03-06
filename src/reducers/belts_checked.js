import { BELTS_CHECKED } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case BELTS_CHECKED:
      return Object.assign({}, ...state, {
        areBeltsChecked: !state.beltsChecked
      });
    default:
    return Object.assign({}, ...state, {
      areBeltsChecked: false
    });
  }
}