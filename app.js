const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=5336%20NE%2028th%20Avenue%20Portland',
  json: true
}, (error, response, body) => {
  console.log(body);
});
