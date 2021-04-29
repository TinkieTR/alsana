const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db')
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix   
  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('<a:noo:750777134548516874> **Gerekli izniniz bulunmuyor**')

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<a:noo:750777134548516874> **Mod Log Kanalı Ayarlanmamış Ayarlamak için  | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('<a:noo:750777134548516874> **Lütfen Kicklemek İstediğiniz Kullanıcıyı Etiketleyin**');
  if (reason.length < 1) return message.channel.send('<a:noo:750777134548516874> **Kickleme Sebebinizi Giriniz**');
  if (user.id === message.author.id) return message.channel.send('<a:noo:750777134548516874> **Kendini Kickleyeceğine Kendin Çıksana ?**');

  const embed = new Discord.MessageEmbed()
  .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

.setColor('#6a00ff')
  .addField('<a:cark:724434925662503096> İşlem', 'Sunucudan Kickleme')
  .addField('<a:cark:724434925662503096> Kicklenen Üye', `${user.tag} (${user.id})`)
  .addField('<a:cark:724434925662503096> Kickleyen Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:cark:724434925662503096> Kick Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.member(user).kick();
  
  const embed2 = new Discord.MessageEmbed()
.setColor('#6a00ff')
  .setDescription(`<a:syes1:751896954182697051> **Kullanıcı Başarıyla Kicklendi**`)
  message.channel.send(embed2)
  
};

exports.config = {  
  name: 'at',
  aliases: ['kick']
 
};

