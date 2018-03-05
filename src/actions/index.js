import React from 'react';

export const FETCH_DATA = 'FETCH_DATA';
export const FILTER_ITEMS = 'FILTER_ITEMS';
export const INITIAL_FILTERS = 'INITIAL_FILTERS';

export function fetchData() {
  return fetch('http://localhost:3000/data.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return {
        type: FETCH_DATA,
        data
      };
    });
};

export function filterItems() {
  return {
    type: FILTER_ITEMS,
    isDropdownVisible: true
  }
};