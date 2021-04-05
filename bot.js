const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require("node-fetch");
const countapi = require('countapi-js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'VOTE SOHUMKALIA') {
    msg.reply('Vote done To SohumKalia');

    updateVisitCount();

    function updateVisitCount() {
      fetch('https://api.countapi.xyz/hit/sohum/2222')
      .then(res => res.json())
      .then(res => {
console.log(res)
countapi.visits().then((result) => {
  console.log(result.value);
  
if (result.value > 1930) {
  greeting = "Voting Done ";
  console.log(greeting)
  
}


});

      })
    }











  }
});


client.login('ODI4NjE4NzI3Nzc1MTQxOTI4.YGsNUw.SwI1ypLoM7pkTn3dpKh4M4nl0OA');
