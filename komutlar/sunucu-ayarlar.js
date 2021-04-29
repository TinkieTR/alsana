const Discord = require('discord.js'); 
const db = require('quick.db'); 
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
if (!message.guild) return;


const sayfa = [`**${message.guild.name} | Sunucu Ayarları**\n\n<a:syes1:751896954182697051> **: Açık**\n<a:noo:750777134548516874> **: Kapalı**\n\n**Botun Prefixi :** \ ${p}\n**Reklam Engel:** ${db.fetch(`reklamengel_${message.guild.id}`) ? `<a:syes1:751896954182697051>` : `<a:noo:750777134548516874>` }\n**Küfür Engel:** ${db.fetch(`kufurE_${message.guild.id}`) ? `<:acik:760840866570305607> ` : `<:kapali:760840865928970282>` }`] 
const ayarReis = new Discord.MessageEmbed() 
   .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

.setColor('#6a00ff')
.setDescription(sayfa)
.setTimestamp() 
message.channel.send(ayarReis) 
}; 


exports.config = { 
name: "ayarlar",
aliases: ["sunucu-ayarları"]
}