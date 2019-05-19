const school = require('./school');
const universities = require('./universities');
const auth = require('./auth');
const account = require('./account');
const express = require('express');

const main = express.Router();

main.get('/', (req, res) => res.status(200).json('ok'));

module.exports = {
  main,
  school,
  universities,
  auth,
  account
};
