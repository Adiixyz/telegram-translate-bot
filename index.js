const { Telegraf } = require('telegraf');
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./configbot.json'))
const bot = new Telegraf(config.bot_token)
const translate = require('@vitalets/google-translate-api')
// start
bot.start(ctx => ctx.reply('Welcome, Silahkan Gunakan Bot Translate Ke Bahasa English Dengan Baik:)'));
// message 
bot.on('message', ctx => {
const lang = 'en'
translate(`${ctx.message.text}`,{to:`${lang}`}).then( res => {
     const translation = res.text
      ctx.reply(translation);
    });
});
//started
bot.startPolling();
/*
* Simple Bot By Adiixyz :)
*/
