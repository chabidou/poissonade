import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import fishHandler from './lib/handlers/fish.js';
import { incidentListHandler, createIncidentHandler } from './lib/handlers/incident.js';

// get config
config();
const PORT = process.env.PORT || 3001;

//  APP
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO : move routes to specific files
app.get('/api/fishs', fishHandler);
app.get('/api/incidents', incidentListHandler);
app.post('/api/createIncident', createIncidentHandler);

app.listen(PORT);
