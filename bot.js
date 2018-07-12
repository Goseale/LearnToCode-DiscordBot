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
const client = Discord.Client()
client.login(token)

// Now to load the base events, except for the ready event

require('./util/eventLoader')

// Now we make the bot send special messages to the console on launch

console.log(`Attempting a startup at: ${new Date()}`);

// Now for successful launch message, and "activity"

client.on("ready", client => {
  console.log(`Successfully launched on ${new Date()}, logged in as user ${client.user.id}`)
  client.setActivity(`LearnToCodeBOT | Prefix: ${prefix}`)
});

// Usually, there would be a command handler here, but we're fancy and use things like Command handlers. =)
// All special events will be in the events folder as their own files while commands are in the commands folder in their own files.
