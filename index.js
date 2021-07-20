import express from 'express';
import { config } from 'dotenv';
// import fishSchemaInput from './lib/schemas/fishInput.js';
import fishHandler from './lib/handlers/fish.js';
import incidentHandler from './lib/handlers/incident.js';

// get env config
config();

//  APP
const app = express();
const PORT = process.env.PORT || 3001;


// TODO : move routes to specific files
app.get('/api/fishs', fishHandler);
app.get('/api/incidents', incidentHandler);

app.listen(PORT);
