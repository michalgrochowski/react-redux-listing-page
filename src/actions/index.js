export const FETCH_DATA = 'FETCH_DATA';
export const SHOW_CATEGORY = 'SHOW_CATEGORY';
export const SHOW_COLORS = 'SHOW_COLORS';

export const BAGS_CHECKED = 'SHOW_COLORS';
export const BELTS_CHECKED = 'BELTS_CHECKED';
export const WALLETS_CHECKED = 'WALLETS_CHECKED';


export function fetchData() {
  return fetch('http://localhost:3000/data.json')
    .then(response => response.json())
    .then(data => {
      return {
        type: FETCH_DATA,
        data
      };
    });
};

export function showCategories() {
  return {
    type: SHOW_CATEGORY
  }
};

export function showColors() {
  return {
    type: SHOW_COLORS
  }
};

export function bagsChecked() {
  return {
    type: BAGS_CHECKED
  }
}

export function beltsChecked() {
  return {
    type: BELTS_CHECKED
  }
}

export function walletsChecked() {
  return {
    type: WALLETS_CHECKED
  }
}