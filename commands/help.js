const contributors = require("../contributors.json");
const settings = require("../settings.json")
let gitNameString = contributors.gitHubNames.join(", ");
exports.run = function (client, message, args) {
    message.channel.send('`Recieved help command, please wait...`').then(response =>
    response.delete(3000).catch(error => console.log(error.stack))).catch(error => console.log(error.stack));

    message.channel.send({embed:{
        title: "LearnToCode BOT - Help",
        description: `This is the help embed requested by ${message.author.tag}`,
        fields: [
            {
                name: "Known Languages:",
                value: "`Start learning one by using the name as a command.`\n**JS** (Javascript)"
            },
            {
                name: "Contributors",
                value: `Want a fancy list of the bot's contributors? just do \`${settings.prefix}contributors\`!`
            }
        ],
        icon_url: message.author.avatarURL,
        color: 777777,
    }});
};