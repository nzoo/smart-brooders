const express = require('express');
const router = express.Router();
const SensorData = require('../models/SensorData');

// Save sensor data
router.post('/data', async (req, res) => {
  const { temperature, humidity, motion } = req.body;
  const sensorData = new SensorData({ temperature, humidity, motion });
  await sensorData.save();
  res.status(201).json({ message: 'Sensor data saved successfully' });
});

// Get all sensor data
router.get('/data', async (req, res) => {
  const data = await SensorData.find();
  res.json(data);
});

module.exports = router;
