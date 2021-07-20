"use strict";

import Joi from 'joi';

const  fishSchemaInput = (res, req, next) => {
  const schema = Joi.object({
  
  });
  
  validateRequest(req, next, schema);
};

export default fishSchemaInput;
