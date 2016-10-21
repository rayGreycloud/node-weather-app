const request = require('request');

var getWeather = (lat, lng, callback) => {
  const apiKey = '334bd309c030f89e8fa97201b40e8959';
  const url = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;

  request({
      url: url,
      json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Dark Sky servers.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};


module.exports.getWeather = getWeather;
