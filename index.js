const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "|="
const help = new Discord.RichEmbed().setTitle("=-=-=-=TimeBot=-=-=-=").setDescription(" ").setColor("#00fff6").setThumbnail(" ").setFooter("Version 1.0 | By Dominic (Dom)#9540").setTimestamp();
client.login(process.env.TOKEN);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
    client.user.setActivity(' |=help | By Little & Dom');
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

client.on('message', message => {
  let deleteStuff = () => {
    let count = 0;
    message.channel.fetchMessages({limit: 100})
     .then(messages => {
       let messagesArr = messages.array();
       let messageCount = messagesArr.length;

       for(let i = 0; i < messageCount; i++) {
         messagesArr[i].delete()
          .then(function() {
            count = count + 1;
            if(count >= 100) {
              deleteStuff();
            }
          })
          .catch(function() {
            count = count + 1;
            if(count >= 100) {
              deleteStuff();
            }
          })
       }
     })
     .catch(function(err) {
       console.log('error thrown');
       console.log(err);
     });
  };
  if (message.content === '|=clear') {
    deleteStuff();
  }
});
client.on('message', message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === 'decide') {
   let option_1 = args[0]; 
   let option_2 = args[1];
    var answer = ((option_1.length * 0.5) + (option_2.length * 0.5)) /2;
    if (answer !== '1' || '2') {
      var answer = "You should go with option " + ((1 - 2) / 2 * -4);
      message.reply(answer);
    }else {
     var answer1 = "You should go with option " + answer;
     message.reply(answer1);
    }
  }
});