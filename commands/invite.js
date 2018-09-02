exports.run = async (client, message, args) => {
    message.author.send(await client.generateInvite("SEND_MESSAGES"))
}