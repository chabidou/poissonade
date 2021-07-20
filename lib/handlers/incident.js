"use strict";

import { getIncidentList } from '../models/incident.js';
import { sendResponse, sendError } from './utils.js';

const incidentHandler = (req, res) => {
  try {
    const incidentList = getIncidentList();
  
    sendResponse(res, incidentList);
  } catch (error) {
    sendError(res, error);
  }
};

export default incidentHandler;
