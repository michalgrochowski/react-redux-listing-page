import React from 'react';

export const FETCH_DATA = 'FETCH_DATA';
export const SHOW_CATEGORY = 'SHOW_CATEGORY';
export const SHOW_COLORS = 'SHOW_COLORS';

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