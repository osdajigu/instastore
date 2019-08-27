var jwt = require('jsonwebtoken')

const secret_key  = 'olakase'

module.exports = function authorization(req, res, next) { 
    var token = req.headers['authorization'];
    if(!token){
        res.status(401).send({ error: "Es necesario el token de autenticación"})
        res.end()
    } else {
        token = token.replace('Bearer ', '')
        jwt.verify(token, secret_key, function(err, user) {
          if (err) {
            res.status(401).send({ error: 'Token inválido'})
          } else {
            console.log(user);
            res.send({ message: 'Awwwww yeah!!!!' })
            res.end()
          }
        })
    }
 }