const prefix = process.env.prefix;
const token = process.env.botToken;

const Discord = require('discord.js')
const client = new Discord.Client()
client.login(token)
const express = require('express')
const http = require('http')
const app = express()

app.get("/", (request, response) => {
	console.log("Ping Received")
	response.sendStatus(200)
})

app.listen(process.env.port);
setInterval(() => {
	http.get(`${process.env.host}`)
}, 240000)

require('./util/eventLoader')(client);


console.log(`Attempting a startup at: ${new Date()}`);


client.on("ready", () => {
  console.log(`Successfully launched on ${new Date()}, logged in as ${client.user.tag}`);
  client.user.setActivity(`LearnToCodeBOT | Prefix: ${prefix}`);
});



var reload = (message, cmd) => {
	delete require.cache[require.resolve('./commands/' + cmd)];
	try {
		let cmdFile = require('./commands/' + cmd);
	} catch (err) {
		message.channel.send(`Problem loading ${cmd}: ${err}`).then(
			response => response.delete(5000).catch(error => console.log(error.stack))
		).catch(error => console.log(error.stack));
	}
	message.channel.send(`${cmd} reload was a success!`).then(
		response => response.delete(5000).catch(error => console.log(error.stack))
	).catch(error => console.log(error.stack));
};
exports.reload = reload;
