const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 

const embed = new Discord.MessageEmbed()
.setColor('#6a00ff')
.setAuthor(`Quick Linkler`, client.user.avatarURL())
.setDescription('**• <a:syes1:751896954182697051> [Quick`i Ekleyin.](https://discord.com/oauth2/authorize?client_id=803038928281403393&scope=bot&permissions=8) <a:syes1:751896954182697051>**\n**• <a:syes1:751896954182697051> [Quick Destek Sunucusu](https://discord.gg/8Mw8Yvq5jq) <a:syes1:751896954182697051>**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail("https://media.discordapp.net/attachments/803375309193216053/803631759630794822/standard.gif")
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };