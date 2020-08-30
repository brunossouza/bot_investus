require('dotenv').config()
const botgram = require('botgram')

var bot = botgram(process.env.TELEGRAM_API_BOT);

bot.command("start", function (msg, reply, next) {
    console.log("Received a /start command from", msg.from.username);
});

bot.command((msg, reply) => reply.text("Invalid command."))