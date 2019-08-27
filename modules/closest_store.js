const app = require('../app.js');
const database = require('./fill_database.js');
const track = require('./track.js');

const storedb = app.storedb;
const storeModel = database.storeModel;

const EARTH_RADIUS = 6378.137; ///in km
const MAX_VELOCITY = 50;

const trackModel = track.trackModel;

function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi/180);
}

function getDistanceByCoord(coord1, coord2) {
    coord1 = degrees_to_radians(coord1);
    coord2 = degrees_to_radians(coord2);
    let deltaCoord = Math.abs(coord1 - coord2);
    let a = Math.sin(deltaCoord/2);
    a = a*a;
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return EARTH_RADIUS * c;
}

function timeToOpen(store) {
    let cur_date = new Date();
    let cur_time = cur_date.getHours() * 60 + cur_date.getMinutes();
    if(cur_time >= store.time_open && cur_time <= store.time_close) {
        return 0;
    } else {
        return store.time_open + (24*60 - cur_time);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max+1 - min)) + min;
  }

function getTime(store, point1, point2) {
    let distance = (getDistanceByCoord(point1.longitude, point2.longitude) + 
        getDistanceByCoord(point1.latitude, point2.latitude));
    
    let timeByCar = distance / MAX_VELOCITY * 60 * 60; /// in seconds
    let delayMakingDelivery = getRandomInt(5, 30);
    return timeByCar  + delayMakingDelivery + timeToOpen(store);
}

function isOpen(store) {
    return timeToOpen(store) === 0;
}


function findClosest(stores, deliveryData) {
    let deliveryPoint = {
        latitude: deliveryData.destination.latitude, 
        longitude: deliveryData.destination.longitude
    };
    let min_time = -1;
    let best_store = null;
    stores.forEach(store => {
        let currentPoint = {
            latitude: store.latitude, 
            longitude: store.longitude
        }
        let t = getTime(store, deliveryPoint, currentPoint);
        // console.log(store.name + " " + t);
        if(min_time == -1 || t < min_time) {
            min_time = t;
            best_store = store;
        }
    });
    return {time: min_time, store: best_store};
}

module.exports = function(req, res) {
    const NAME = req.id_company;
    storeModel.findOne({id_company: NAME}, (err, doc) => {
        if(err) {
            res.status(404);
            res.send("the id of the company provided doesnt exist");
            trackModel.findByIdAndUpdate(req.track_id, {status: "404"});
        } else {
            res.status(200)
            var data = findClosest(doc.stores, req.body);
            var deliveryTime = new Date(Date.now())
            deliveryTime.setMinutes(deliveryTime.getMinutes() + data.time);
            var expectedDeliveryTime = new Date(req.body.expected_delivery);
            var response = {
                store_id: data.store._id,
                store_name: data.store.name,
                is_open: isOpen(data.store),
                latitude: data.store.latitude,
                longitude: data.store.latitude,
                next_delivery_time: deliveryTime.getTime() < expectedDeliveryTime.getTime() ? expectedDeliveryTime : deliveryTime,
            }
            res.json(response);
            trackModel.findByIdAndUpdate(req.track_id, {response: response, status: "OK"});
        }
        res.end();
    });
};