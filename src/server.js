require('dotenv').config();
const botgram = require('botgram');

const bot = botgram(process.env.TELEGRAM_API_BOT);

bot.command("start", function (msg, reply, next) {
    reply.text("Received a /start command from " + msg.from.username);
});

bot.command("check", function (msg, reply, next) {
    reply.text(`Received ${msg.text} from ${msg.from.username}`);
});

bot.command((msg, reply) => reply.text("Invalid command."));