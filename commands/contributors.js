const contributors = require('../contributors.json');
exports.run = (client, message, args) => {
    let contrib = [];
    contributors.gitHubNames.forEach(name => {
        contributors.discordTag.forEach(tag => {
            contributors.discordID.forEach(ID => {
                contrib.push(`${name} (${tag}, ${ID})`)
            })
        })
    });  
    if (contrib) {
        message.channel.send(`**A full list of contributors**\n${contrib.join(',\n')}`)
    } else {
        message.delete(100).error(e => {
            console.log(e.stack)
        })
        message.channel.send("error").then(res => {
            res.delete(5000).catch(e => {
                console.log(e.stack)
            })
        })
    }
};