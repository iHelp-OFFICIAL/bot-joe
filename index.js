const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'
const token = 'NDk3ODUwNzM3OTY4MjgzNjU4.Xn8PZA.WQ-vgcq9pUFm4hOvLVQEUTxWAn4'

client.once('ready', ()=> {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === `${prefix}cmds`) {
        message.channel.send(`Here is a list of our commands:\nping - Sends back pong\ninfo - Tells you back some information about the bot\nmembers - Tells you how many members are in this server`);
    }
  });

client.on('message', message => {
   if (message.content === `${prefix}ping`) {
       message.channel.send('Pong!');
   }
 });

 client.on('message', message => {
    if (message.content === `${prefix}info`) {
        message.channel.send(`This bot is for ${message.guild.name}! We are a roblox group venue, with gamenight rooms, stages, meeting rooms and more!\nTotal members: ${message.guild.memberCount}\nThis bot was coded by Aviation_Joe#7389. DM him for more info.\nCoded in Visual Studio Code with discord.js`);
    }
  });

  client.on('message', message => {
    if (message.content === `${prefix}members`) {
        message.channel.send(`This server has ${message.guild.memberCount} members.`);
    }
  });

  client.on('message', message => {
    if (message.content === `${prefix}cmds`) {
        message.channel.send(`Here is a list of our commands:\nping - Sends back pong\ninfo - Tells you back some information about the bot\nmembers - Tells you how many members are in this server`);
    }
  });

  client.on('message', message => {
    if (message.content === `${prefix}eval`) {
       const evalEmbed = new Discord.MessageEmbed()
       .setColor('#FFAA00')
       .setAuthor('iHelp Bot by Aviation_Joe')
       .setDescription('This bot is online and working. Contact Aviation_Joe#7389 **ONLY** if a command is broken.')
       .setFooter('This is a footer')
       message.channel.send(evalEmbed);
       console.log('Eval performed.')
    }
  });

client.login(token);