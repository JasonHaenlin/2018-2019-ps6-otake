const Ticket = require('./models/ticket');
const Author = require('./models/author');
const Major = require('./models/major');
const GeographicalArea = require('./models/geographicalArea');
const Country = require('./models/country');
const City = require('./models/city');

// add all the tables here
module.exports = {
  Ticket,
  Author,
  Major,
  GeographicalArea,
  Country,
  City,
};
