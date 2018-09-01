const reqEvent = (event) => require(`../events/${event}`)
console.log(`Start loading events`)
module.exports = client => {
	client.on('reconnecting', () => reqEvent('reconnecting')(client));
	client.on('message', reqEvent('message'));
	client.on('error', reqEvent('error'))
};