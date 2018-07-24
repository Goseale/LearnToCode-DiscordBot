exports.run = function (client, message, args) {
    message.channel.send('`Recieved help command, please wait...`').then(response =>
    response.delete(3000).catch(error => console.log(error.stack))).catch(error => console.log(error.stack));

    message.channel.send({embed:{
        title: "LearnToCode BOT - Help",
        description: `This is the help embed requested by ${message.author.tag}`,
        fields: [
            {
                name: "Known Languages:",
                value: "`Start learning one by using the name as a command.`\nJS (Javascript)"
            },
            {
                name: "Contributors:",
                value: "Proxxa#0574"
            }
        ],
        icon_url: message.author.avatarURL,
        color: 777777,
    }});
};