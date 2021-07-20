"use strict";

import { getIncidentList } from '../models/incident.js';

const incidentHandler = (req, res) => {
  try {
    const incidentList = getIncidentList();

    res.json({
      error: null,
      data:  incidentList
    })
  } catch (error) {
    res
      .status(400)
      .json({
        error: error,
        data:  null
      })
  }
};

export default incidentHandler;
