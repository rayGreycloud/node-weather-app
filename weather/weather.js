const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  const apiKey = '334bd309c030f89e8fa97201b40e8959';
  console.log(latitude, longitude);
  request({
      url: `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`,
      json: true
  }, (error, response, body) => {
    if (error) {
      console.log('Unable to connect to Dark Sky servers.');
    } else if (response.statusCode === 400 || 404) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200){
      callback(undefined, {
        currentTemp: body.currently.temperature
      });
    }
  });
};


module.exports = {getWeather};
