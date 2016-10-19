const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=5336%20NE%2028th%20Avenue%20Portland',
  json: true
}, (error, response, body) => {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
