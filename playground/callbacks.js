var getUser = (id, callback) => {
	var user = {
		id: id,
		name: 'NickTheHuman'
	}
	setTimeout(() => {
		callback(user); // Simulated delay
	}, 3000)
};

getUser(31, (userObject) => {
	console.log(userObject);
})