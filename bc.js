const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});




client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Code By : ZorexHost`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Code By : ZorexHost `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`قلبى ميار`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



 client.login("MzA2NDY0MzgxNzc1MTE4MzM2.DsN5rg.43I_fvSdH8ty5IWVUV-prnHPRHM");