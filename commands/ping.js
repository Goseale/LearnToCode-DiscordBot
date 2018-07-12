exports.run = function (client, message, args) {
    message.channel.send(`Pong! My average heartrate ping is ${client.ping} ms`)
};