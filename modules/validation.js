const express = require('express');
const Joi = require('joi');
const track = require('./track.js');

const trackModel = track.trackModel;

var validator = express.Router();
validator.get('/closest/store', function (req, res, next) { 
    const schema = {
        expected_delivery: Joi.date(),
	    destination: Joi.object().keys({
            name: Joi.string().min(3),
	        address: Joi.string().min(5),
	        address_two: Joi.string().min(5),
	        description: Joi.string(),
	        country: Joi.string().min(3),
	        city: Joi.string().min(3),
	        state: Joi.string().min(3),
	        zip_code: Joi.number(),
	        latitude:  Joi.number().required(), 
		    longitude: Joi.number().required()
        }).required()		
    }
    const result = Joi.validate(req.body, schema);
    if(result.error) {
        res.status(400).send({error: result.error.details[0].message});
        res.end();
        trackModel.findByIdAndUpdate(req.track_id, {status: "404"});
    } else {
        next();
    }
});

module.exports = validator;