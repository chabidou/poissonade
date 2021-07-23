"use strict";

import { getIncidentList } from '../models/incident.js';
import { sendResponse, sendError } from './utils.js';

export const incidentListHandler = (req, res) => {
  try {
    const incidentList = getIncidentList();
  
    sendResponse(res, incidentList);
  } catch (error) {
    sendError(res, error);
  }
};



export const createIncidentHandler = (req, res) => {
  try {
    // TODO use Joi to validate input schema
   console.log(req);
  
    sendResponse(res, null);
  } catch (error) {
    sendError(res, error);
  }
};
