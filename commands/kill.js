exports.run = function (client, message, args) {
    if (message.author.id === "181068943723724801") {
        message.author.send("Shutting down bot");
        process.end()
    };
};