const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const helper = require('./helper');
const keyboard = require('./keyboard');
const kb = require('./keyboard-buttons');

helper.logStart();

const bot = new TelegramBot(config.TOKEN, {
  polling: true
});

bot.on('message', msg => {
  console.log('Working', msg.from.first_name);


	switch (msg.text) {
		case kb.home.favourite:
			break;
		case kb.home.films:
			break;
		case kb.home.cinemas:
			break;
	}
});

bot.onText(/\/start/, msg => {

	const text = `Здравствуйте, ${msg.from.first_name}\nВыберите команду для начала работы:`;
	bot.sendMessage(helper.getChatId(msg), text, {
		reply_markup: {
			keyboard: keyboard.home
		}
	})

});