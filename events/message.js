const settings = require('../settings.json')
module.exports = message => {

    let prefix = settings.prefix
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

    const client = message.client
    const args = message.content.split(' ');
    const command = args.shift().slice(prefix.length)
    console.log(`Command attemped, Command: ${command} Args: ${args}`)

    try{
        let cmdFile = require(`../commands/${command}`);
        cmdFile.run(client, message, args);
    } catch (err) {
        console.log(`Command ${command} failed\n${err.stack}`);
        message.delete().catch(e => console.log(e))
        message.reply('An error occurred.').then(res => res.delete(3000).catch(e =>
        console.log(e.stack))).catch(e => console.log(e.stack))
    }
}