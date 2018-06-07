const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const ms = require('ms');
const token = "MzQwOTUxMjI1ODc5MjMyNTE4.DF5_Fg.1pCZMXf6gqTvdDEClx7PWzU80_M"
const prefix = "|="
const help = new Discord.RichEmbed().setTitle("=-=-=-=TimeBot=-=-=-=").setDescription(" ").setColor("#00fff6").setThumbnail(" ").setFooter("Version 1.0 | By LittleWhole#2107 & Dominic (Dom)#9540").setTimestamp();
client.login(token);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
    client.user.setGame(' |=help | By Little & Dom');
    client.user.setStatus('online');
    console.log(client.id);
});
client.on('message', message => {
    if (message.content === '|=time') {
        var time = Date();
        console.log(time);
        message.channel.send(time);
    }
});