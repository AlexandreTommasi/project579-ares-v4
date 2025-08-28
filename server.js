// Redirect to backend server
const { spawn } = require('child_process');
const path = require('path');

// Change to backend directory and start the server
process.chdir(path.join(__dirname, 'backend'));

// Run npm install if node_modules doesn't exist
const fs = require('fs');
if (!fs.existsSync('node_modules')) {
  console.log('Installing dependencies...');
  require('child_process').execSync('npm install --production', { stdio: 'inherit' });
}

// Start the backend server
console.log('Starting backend server...');
require('./dist/server.js');
