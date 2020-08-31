require('dotenv').config();

// to add bot to discord server go here:
// you need to have `manage server` permission to be able to see the server 
//https://discord.com/api/oauth2/authorize?client_id=<id from discord>&scope=bot
//https://discord.com/api/oauth2/authorize?client_id=749994218881155163&scope=bot

const { Client } = require('discord.js');

const client = new Client();

client.login(process.env.DISCORDJS_BOT_TOKEN);