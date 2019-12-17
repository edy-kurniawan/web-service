var jwt = require('jsonwebtoken')
var validasi = function(req, res, next) {
    var bearerHeader = req.headers["authorization"]

    if(typeof bearerHeader !== 'undefined') {
       const bearer = bearerHeader.split(" ")
       const bearerToken = bearer[1]
       jwt.verify(bearerToken, 'diisiTerserahYangPenting32Digit', (err, result) => {
           if(err) {
               res.sendStatus(401);
           } else {
             next();
         }
     });
       
   }else {
       res.sendStatus(401);
   }
}

module.exports = validasi;