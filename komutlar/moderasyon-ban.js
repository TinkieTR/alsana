const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  

    
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('<a:noo:750777134548516874> **Gerekli Yetkin Yok Dostum**')

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<a:noo:750777134548516874> **Mod Log Kanalı Ayarlanmamış Ayarlamak İçin** | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('<a:noo:750777134548516874> **Lütfen Banlamak İstediğiniz Üyeyi Etiketleyin**');
  if (reason.length < 1) return message.channel.send('<a:noo:750777134548516874> **Lütfen Sebep Giriniz**');
  if (user.id === message.author.id) return message.channel.send('<a:noo:750777134548516874> **Dostum Kendini Banlıyamazsın**');

  const embed = new Discord.MessageEmbed()
.setColor('#6a00ff')
  .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

  .addField('<a:cark:724434925662503096> İşlem', 'Sunucudan Banlama')
  .addField('<a:cark:724434925662503096> Banlanan Üye', `${user.tag} (${user.id})`)
  .addField('<a:cark:724434925662503096> Banlayan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:cark:724434925662503096> Ban Sebebi', "```" + reason + "```")
  modlog.send(embed);
  user.send(`\`${message.guild.name}\` **Adlı Sunucuda Yaptığınız Olumsuz Davranışlardan Dolayı Yasaklandınız** \n **Yetkilinin Girdiği Sebep:** \`${reason}\``)
  

  message.guild.members.ban(user, 2);
  
  const embed2 = new Discord.MessageEmbed()
.setColor('#6a00ff')
    .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

  .setDescription(`<a:syes1:751896954182697051> **Kullanıcı Başarıyla Banlandı**`)
  message.channel.send(embed2)

  message.guild.members.cache.get(user.id).ban({
  	reason: `${reason}`
              })

};

exports.config = {
  name: 'yasakla',
  aliases: ['ban','yasakla','banla']
};

