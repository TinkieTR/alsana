const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`<a:noo:750777134548516874> **Hey Sen** Evet Sen! Bu Komut İçin Yeterli Yetkin Yok!`)
if (!args[0])  {
    const küfürcu0k = new Discord.MessageEmbed()
    .setColor('#6a00ff')

    .setTitle('Başarısız')
    .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

    .setDescription(`<a:noo:750777134548516874> Bunumu Arıyorsun? \n ${prefix}reklam-engel aç/kapat`)
      return message.channel.send(küfürcu0k)

  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, 'acik')
    let lus = await db.fetch(`reklamengel_${message.guild.id}`)
    
    const reklamengelcim = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

.setColor('#6a00ff')
    .setDescription('<a:syes1:751896954182697051> **Reklam Engeli Açtım**')
    return message.channel.send(reklamengelcim)

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`reklamengel_${message.guild.id}`, 'kapali')

   const küfürengelcim22 = new Discord.MessageEmbed()
   .setColor('#6a00ff')

    .setTitle('Başarılı')
   .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

    .setDescription('<a:syes1:751896954182697051> **Reklam Engeli Kapattım**')
    return message.channel.send(küfürengelcim22)
  }

  
  
  
};
exports.config = {
 name: 'reklamengelle',
  aliases: ['reklam-engel']

};
