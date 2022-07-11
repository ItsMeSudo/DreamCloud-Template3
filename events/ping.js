const {replyMessage} = require('../utils/reply');
module.exports = {
    name: 'messageCreate', // event neve,
    once: false, // hanyszor listeningeljen az event.
    execute(message) {
        if (message.author.bot) return;
        if (message.content === "ping")
            replyMessage({user: message, Message: "pong"});
    }
}