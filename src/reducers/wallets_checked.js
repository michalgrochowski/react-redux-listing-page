import { WALLETS_CHECKED } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case WALLETS_CHECKED:
      return Object.assign({}, ...state, {
        areWalletsChecked: !state.walletsChecked
      });
    default:
    return Object.assign({}, ...state, {
      areWalletsChecked: false
    });
  }
}