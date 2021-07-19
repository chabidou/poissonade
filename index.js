import express from "express";
import { config } from "dotenv";
import { createIncident } from './lib/routes/incident.js';

// get env config
config();

//  APP
const app = express();
const PORT = process.env.PORT || 3001;


// TODO : move routes to specific files
// app.get('/createIncident', createIncident);

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT);
