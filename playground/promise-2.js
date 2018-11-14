const request = require('request');

/* Wrap library that doesnt support promise(Request) into promise ready function*/
var geoCodeAddress = (address) => {
	var encodedAddress = encodeURIComponent(address);

	return new Promise((resolve, reject) => {
		request({
			url: `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyB3GJ6UOmxkmYBNIcpSwKs3rFjLRtw3-0s&address=${encodedAddress}`,
			json: true
		}, (error, response, body) => {
			if (error){
				reject('Unable to connect to Google servers');
			}
			else if(body.status === 'ZERO_RESULTS') {
				reject('Unable to find the provided address');
			}
			else if(body.status ==='OK')
			{
				resolve({
					address: body.results[0].formatted_address,
					latitude: body.results[0].geometry.location.lat,
					longitude: body.results[0].geometry.location.lng,
				})
			}
		});

	});
};

geoCodeAddress('33162').then((location) => {
	console.log(JSON.stringify(location, undefined, 2));

}, (errorMessage) => {
	console.log(errorMessage);
});