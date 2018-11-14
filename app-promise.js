const yargs = require('yargs');
const axios = require('axios');


const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for.',
			string: true // parse a as a string
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB3GJ6UOmxkmYBNIcpSwKs3rFjLRtw3-0s&address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
	if(response.data.status =='ZERO_RESULTS'){
		throw new Error('Unable to find that address');
	}
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.lng;
	var weatherUrl = `https://api.darksky.net/forecast/c9b736748717427701d9d9348eb5d16c/${lat},${lng}`
	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherUrl);
}).then((response) => {
	// Call when right
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e) => {
	if(e.code === 'ENOTFOUND'){
		console.log('Unable to connect to API servers.')
	} else {
		console.log(e.message);
	}
});


	

