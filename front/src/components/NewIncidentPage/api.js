import React from "react";
import axios from 'axios';

/**
 * Post data from form
 */
const postForm = (data) => {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  axios.post('http://localhost:3001/api/createIncident', data, options)
    .then(
      res => {console.log('----- RESPONSE FROM POST')}
    )
    .catch((error) => error);
};

export default postForm;
