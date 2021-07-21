import React from "react";

/**
 * Get data from API.
 * Can be handle data/error from API, before render in component
 */
const getData = () =>
  fetch('http://localhost:3001/api/incidents')
    .then(res => res.json())
    .then(
      (result) => result.data,
      (error) =>  {
        console.log('--- ERROR : ', error);
        return null;
      }
    )
    .catch((error) => error);


export default getData;
