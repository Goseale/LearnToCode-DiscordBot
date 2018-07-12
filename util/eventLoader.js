const reqEvent = (event) => require(`../events/${event}`)
module.exports = client => {
	client.on('reconnecting', () => reqEvent('reconnecting')(client));
	client.on('disconnect', () => reqEvent('disconnect')(client));
	client.on('message', reqEvent('message'));
};