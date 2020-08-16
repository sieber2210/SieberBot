const Discord = require('discord.js');

const bot = new Discord.Client();

const {prefix, token} = require('./config.json');

const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.once('ready', () => {
    console.log('SieberBot is Online!');
});

bot.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        bot.commands.get('ping').execute(message, args);
    } else if(command == 'itch'){
        bot.commands.get('itch').execute(message, args);
    }else if(command == 'tester'){
        bot.commands.get('tester').execute(message, args);
    }else if(command == 'fan'){
        bot.commands.get('fan').execute(message, args);
    }else if(command == 'help'){
        bot.commands.get('help').execute(message, args);
    }else if(command == 'patreon'){
        bot.commands.get('patreon').execute(message, args);
    }else if(command == 'destroy'){
        if(!message.member.roles.cache.some(r => r.name === "Sieber Himself")){
            message.channel.send('You do not have permission to use this command.')
        }else{
            bot.destroy();
        }
    }
});

bot.on('guildMemberAdd', member =>{
    console.log('User ' + member.user.username + ' has joined the server!');
    var role = guild.roles.cache.find(role => role.name === "Fans And Supporters");
    member.roles.add(role).catch(console.error);
});


bot.login(token);