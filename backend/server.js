const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db');
const sensorRoutes = require('./routes/sensorRoutes');
const { detectAnomalies } = require('./ai-model/anomaly-detection');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/sensors', sensorRoutes);

// AI Anomaly Detection Endpoint
app.post('/api/detect-anomalies', (req, res) => {
  const sensorData = req.body;
  const anomalies = detectAnomalies(sensorData);
  res.json({ anomalies });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
