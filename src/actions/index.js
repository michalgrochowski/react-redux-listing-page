export const FETCH_DATA = 'FETCH_DATA';

export function fetchData() {
  const jsonData = 'http://localhost:3000/data.json';

  const data = fetch(jsonData)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    }
  )
  .catch(err => console.log(err));
  
  return {
    type: FETCH_DATA,
    payload: data
  };
};