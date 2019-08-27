const app = require('../app.js');

const mongoose = app.mongoose;
const trackdb = app.trackdb;

var trackSchema = new mongoose.Schema({
    time: Date,
    data: {
        name: String,
        address: String,
        address_two: String,
        description: String,
        country: String,
        city: String,
        state: String,
        zip_code: String,
        latitude: Number,
        longitude: Number
    },
    status: String,
    response: {  
        store_id: String,
        store_name: String,  
        is_open: Boolean,  
        latitude: Number,  
        longitude: Number,  
        next_delivery_time: Date
    } 
});

var Track = trackdb.model('Track', trackSchema);

module.exports = function(req, res, next) {
    let track = new Track({
        time: new Date(),
        data: req.body,
        status: "None yet",
    })
    track.save();
    next();
}