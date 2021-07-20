import express from 'express';
import validate from 'express-joi-validate';
import { config } from 'dotenv';
import fishSchemaInput from './lib/schemas/fishInput.js';
import fishHandler from './lib/handlers/fish.js';

// get env config
config();

//  APP
const app = express();
const PORT = process.env.PORT || 3001;


// TODO : move routes to specific files

app.get('/api/fishs', /*validate(fishSchemaInput),*/ fishHandler);

app.listen(PORT);
