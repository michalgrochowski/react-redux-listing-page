import { BAGS_CHECKED } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case BAGS_CHECKED:
      return Object.assign({}, ...state, {
        areBagsChecked: !state.areBagsChecked
      });
    default:
    return Object.assign({}, ...state, {
      areBagsChecked: false
    });
  }
}