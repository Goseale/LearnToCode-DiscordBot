// Before we do ANYTHING, we're setting up some basic variables.
// You should have this code downloaded and have your very own settings.json file that you made.
// This file is not included since we don't want to break the confidentiality of anyone's copy of the bot.
// .gitignore has settings.json already ignored. So Proxxaaa's copy of settings.json isn't given away to everyone in the world who sees this.
const settings = require('./settings.json');
const prefix = settings.prefix;
const token = settings.token;
// Never give out your token, so keep this file safe at all times.
// The settings file should look like this
/*
{
  "prefix": "?"
  "token": "TOKEN"
}
*/

// Obviously, don't include the /**/, those are to comment out that text. Keep the curly brackets, however.
// Also, don't forget you need at least Node 6.0.0 and the latest version of Discord.JS to host your very own version of the bot.


const Discord = require('discord.js')
const client = new Discord.Client()
client.login(process.env.botToken)
const app = require('express')
const http = require('http')

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
