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

// Now to set up the environment.

const Discord = require('discord.js')
const client = new Discord.Client()
client.login(token)

// Now to load the base events, except for the ready event

require('./util/eventLoader')(client);

// Now we make the bot send special messages to the console on launch

console.log(`Attempting a startup at: ${new Date()}`);

// Now for successful launch message, and "activity"

client.on("ready", () => {
  console.log(`Successfully launched on ${new Date()}, logged in as ${client.user.tag}`);
  client.user.setActivity(`LearnToCodeBOT | Prefix: ${prefix}`);
});

// Usually, there would be a message handler here, but we're fancy and use things like exports. =)
// All special events will be in the events folder as their own files while commands are in the commands folder in their own files.


// Lets add our reload handler


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
