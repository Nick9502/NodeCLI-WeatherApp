// Can use for database function
var asyncAdd = (a,b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof a === 'number' && typeof b === 'number') {
				resolve(a+b);
			} else {
				reject('Arguments must be numbers');
			}
		}, 1500);
	});
};

/* Callback Chaining */
asyncAdd(5,"7").then((res) => {
	console.log('Result: ', res);
	return asyncAdd(res,33);
},).then((res) => {
	console.log('Should be 45', res);
}).catch((errorMessage) => {
	console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		//resolve('Hey. You There.') // Actual requested data when user wants.
// 		reject('Unable to fullfill promise');
// 	}, 2500);
	
// });
// // Success and Error
// somePromise.then((message) => {
// 	console.log('Printing success', message)
// }, (errorMessage) => {
// 	console.log('Error', errorMessage);
// });