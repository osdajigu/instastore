var jwt = require('jsonwebtoken')
const track = require('./track.js');

const trackModel = track.trackModel;
const secret_key  = 'olakase'

module.exports = function authorization(req, res, next) { 
    var token = req.headers['authorization'];
    if(!token){
        res.status(401).send({ error: "Es necesario el token de autenticación"})
        res.end()
        trackModel.findByIdAndUpdate(req.track_id, {status: "401"});
    } else {
        token = token.replace('Bearer ', '')
        jwt.verify(token, secret_key, function(err, data) {
          if (err) {
            res.status(401).send({ error: 'Token inválido'})
            trackModel.findByIdAndUpdate(req.track_id, {status: "401"});
            res.end();
          } else {
            req.id_company = data.id_company;
            next();
          }
        })
    }
 }