export const FETCH_DATA = 'FETCH_DATA';

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