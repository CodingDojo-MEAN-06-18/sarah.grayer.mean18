const mongoose = require('mongoose');

//require the file-system so taht we can load, read, require all model files
const fs = require('fs');

//utilize path for easy dir/file joining
const path = require('path');

//directory where our models are located
const modelsPath = path.resolve('server', 'models');

//Regular expression that checks for .js extension
const reg = new RegExp("\\.js$", "i");

//db info
const dbURI = "mongodb://localhost/1955-api";

//connect to db
mongoose.connect(dbURI);

//Connection Events

//When successfully connected
mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to ${ dbURI }`);
});

//When the connection is disconnected
mongoose.connection.on('error', err => {
  console.error(`Mongoose default connection error: ${ err }`);

  process.exit(0);
});

//If the node process ends, close the mongoose connection
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

//Read all the files in the models dir and check if it is a js file before requiring it
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through program termination');
    process.exit(0);
  });
});

fs.readdirSync(modelsPath).forEach(file => {
  if (reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
