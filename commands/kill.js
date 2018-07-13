exports.run = function (client, message, args) {
    if (message.author.id === "181068943723724801") {
        message.channel.send("Shutting down bot");
        client.destroy();
        process.end()
    };
};