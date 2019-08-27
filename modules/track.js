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
    token: String,
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

module.exports.trackModel = Track;
module.exports.trackData = function(req, res, next) {
    let track = new Track({
        time: new Date(),
        data: req.body,
        status: "None yet",
        token: req.headers['authorization'],
        response: null,
    })
    track.save((err, data) => {
        if(err) {
            res.status(500).send({ error: "Hubo un error guardando en la base de datos"});
            res.end();
        } else {
            req.track_id = data._id;
            next();
        }
    });
}