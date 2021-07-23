import React from "react";
import axios from 'axios';

/**
 * Get data from API.
 * Can be handle data/error from API, before render in component
 */
const getData = () =>
  axios.get('http://localhost:3001/api/incidents')
    .then(
      result => result.data.data,
      error =>  {
        console.log('--- ERROR : ', error);
        return null;
      }
    )
    .catch((error) => error);


export default getData;
