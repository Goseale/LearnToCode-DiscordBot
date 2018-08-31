const main = require('../bot.js');
exports.run = function(client, message, args) {
    message.delete(100).catch(e => {})
    let cmd = args.join(' ')
    main.reload(message, cmd)
};