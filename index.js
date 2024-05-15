const { Client, Events, GatewayIntentBits } = require('discord.js');

// const { token } = require('./config.json');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});
client.on('messageCreate', (msg) => {
  if (msg.content.toLowerCase().includes('igor')) {
    msg.reply('Baitola 🌈!');
  }

  console.log(msg.content);
});

client.login(process.env.DSICORD_TOKEN);
