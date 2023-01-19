"use strict";

var jwt = require('jsonwebtoken');
var jwtSecret = "HaHa";
var fetch = function fetch(req, res, next) {
  // get the user from the jwt token and add id to req object
  var token = req.header('auth-token');
  if (!token) {
    res.status(401).send({
      error: "Invalid Auth Token"
    });
  }
  try {
    var data = jwt.verify(token, jwtSecret);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({
      error: "Invalid Auth Token"
    });
  }
};
module.exports = fetch;