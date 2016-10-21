const yargs = require('yargs');
const request = require('request');

const geocode = require('./geocode/geocode');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
})
  .help()
  .alias('help', 'h')
  .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });


const apiKey = '334bd309c030f89e8fa97201b40e8959';

request({
    url: `https://api.darksky.net/forecast/334bd309c030f89e8fa97201b40e8959/45.5620183,-122.6365569`,
    json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Dark Sky servers.');
  } else if (response.statusCode === 400 || 404) {
    console.log('Unable to fetch weather.');
  } else if (response.statusCode === 200){
    console.log(`Latitude: ${body.latitude}`);
    console.log(`Longitude: ${body.longitude}`);
    console.log(`Current Temp: ${body.currently.temperature}`);
  } else { console.log(response.statusCode);}
});
