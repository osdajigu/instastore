const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const trackdb = mongoose.createConnection("mongodb://localhost:27017/track-db", {useNewUrlParser: true});
const storedb = mongoose.createConnection("mongodb://localhost:27017/store-db", {useNewUrlParser: true});

module.exports.trackdb = trackdb;
module.exports.storedb = storedb;
module.exports.mongoose = mongoose;

const fillDataBase = require('./modules/fill_database.js');
const closestStore = require('./modules/closest_store.js');
const trackData = require('./modules/track.js');

fillDataBase.fillDatabase();

function authorization(req, res, next) { 
    next();
 }

var validator = express.Router();
validator.get('/', function (req, res, next) { 
    next(); 
});

var closest_store = express.Router();
closest_store.get('/', function (req, res, next) { 
    console.log("r3");
    next();
 });

app.use(trackData, [authorization, validator, closestStore], );

app.listen(3002, (req, res) => {
    console.log('server running on port 3002')
});
