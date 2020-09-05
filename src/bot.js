require('dotenv').config();

// to add bot to discord server go here:
// you need to have `manage server` permission to be able to see the server 
//https://discord.com/api/oauth2/authorize?client_id=<id from discord>&scope=bot
//https://discord.com/api/oauth2/authorize?client_id=749994218881155163&scope=bot

const { Client } = require('discord.js');

const client = new Client();
const prefix = "$";

client.on('ready', () => {
    console.log(`${client.user.username}`);
    console.log(`${client.user.tag} has logged in`);
});

client.on('message', (message) => {
    if(message.author.bot === true)
        return;

    if(message.content.startsWith(PREFIX)){
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(" ");

        if(CMD_NAME === "kick"){
            if(args.length < 1) return message.reply('provide a user name');
            const member = message.guild.members.cache.get(args[0]);
            if(member) {
                member.kick()
                    .then(member => message.channel.send(`${member} was kicked.`))
                    .catch(err => message.channel.send(`bot doesn't have permissions to kick the user`));
                }else{
                message.channel.send('member not found');
            }
        }
    }

    if(message.content === 'hello'){
        message.reply('hello there');
        message.channel.send('whazzupp');
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);