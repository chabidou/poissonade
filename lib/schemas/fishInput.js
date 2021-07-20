"use strict";

import Joi from 'joi';

const  fishSchemaInput = {
    title: Joi.string().required,
    description: Joi.string().required()
};

export default fishSchemaInput;
