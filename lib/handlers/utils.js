"use strict";

/**
 * Structure response format to client
 *
 * @param res  object response
 * @param data data from model
 */
export const sendResponse = (res, data) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
      error: null,
      data
  })
};

/**
 * Structure error format to client
 *
 * @param res
 * @param error
 */
export const sendError = (res, error) => {
  console.log('----- ERROR : ', error);
  res
    .status(400)
    .json({
      error: error,
      data:  null
    })
};
