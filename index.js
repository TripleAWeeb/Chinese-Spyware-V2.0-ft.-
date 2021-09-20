const Discord = require('discord.js');
const { executionAsyncResource } = require('async_hooks');
require('dotenv').config();
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const prefix = '-';
const fs = require('fs');
const { CLIENT_RENEG_WINDOW } = require('tls');
client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})
client.login(process.env.DISCORD_TOKEN);