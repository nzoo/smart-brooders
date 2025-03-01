// Simple anomaly detection logic (can be replaced with a trained ML model)
function detectAnomalies(sensorData) {
  const anomalies = [];

  // Example: Detect high temperature
  if (sensorData.temperature > 40) {
    anomalies.push('High temperature detected');
  }

  // Example: Detect low humidity
  if (sensorData.humidity < 20) {
    anomalies.push('Low humidity detected');
  }

  // Example: Detect no motion (chicks might be inactive)
  if (sensorData.motion === 0) {
    anomalies.push('No motion detected');
  }

  return anomalies;
}

module.exports = { detectAnomalies };
