console.log('Starting app');

// Register async callback for 2 seconds.
setTimeout(() => {
	console.log('2 sec callback')
}, 2000);

setTimeout(() => {
	console.log('Instant callback')
}, 0);

console.log('Finishing up');