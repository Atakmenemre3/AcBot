const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(` ${client.user.tag}aktif!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam!');
  }
  if (msg.content === '!ar') {
    msg.reply('https://www.youtube.com/channel/UCbG3kOpo8KhkUfO5E7bYRwA');
  }
  if (msg.content === '!ea') {
    msg.reply('https://www.youtube.com/channel/UCHr4ypysVheou96_qlF9FCw');
  }
  if (msg.content === '!yt') {
    msg.reply('https://www.youtube.com/channel/UCHr4ypysVheou96_qlF9FCw, https://www.youtube.com/channel/UCbG3kOpo8KhkUfO5E7bYRwA');
  }
  if (msg.content === '!tag') {
    msg.reply('Tagımız 《AC》 《AC》 《AC》');
  }

});

client.login('process.env.BOT_TOKEN');
