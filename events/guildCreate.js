const settings = require('../settings.json')
module.exports = async (guild) => {
    console.log("Joined server " + await guild)
    if (guild.owner) {
        guild.owner.send(`**I have been added to your server!**\nMy current Prefix is ${settings.prefix}`)
    }
    if (guild.channels.find("name", "general")) {
        guild.channels.find("name", "general").send(`**Thanks for Adding me!**\n\
My current prefix is ${settings.prefix}, but you can check at any time in my "Playing..." bar.`)
    }
}