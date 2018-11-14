const request = require('request');
var getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/c9b736748717427701d9d9348eb5d16c/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (error){
			callback('Unable to retreive data from darksky API');
		}
		else if(response.statusCode=== 400) {
			callback('Unable to find the provided address');
		}
		else if(response.statusCode === 200)
		{
			callback(undefined, {
				temperature: body.currently.temperature,
				actualTemperature: body.currently.apparentTemperature
			});
		}
	});

}


module.exports.getWeather = getWeather;