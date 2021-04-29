const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {

  const db = require('quick.db');
  
  const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
    
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:noo:750777134548516874> **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);
  

  let user = args[0];
  let reason = args.slice(1).join(' ');
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<a:noo:750777134548516874> **Mod Log Kanalı Ayarlanmamış | ${prefix}modlog #kanal**`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
 if (isNaN(user)) return message.channel.send('<a:noo:750777134548516874> **Lütfen Banını Açmak İstediğiniz Üyeninin ID sini Girin**');
  if (reason.length < 1) return message.channel.send('<a:noo:750777134548516874> **Lütfen Sebep Giriniz**');
 
  
  const embed = new Discord.MessageEmbed()
.setColor('#6a00ff')
     .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

  .addField('<a:syes1:751896954182697051> İşlem', 'Ban Kaldırma')
  .addField('<a:syes1:751896954182697051> Banı Açılan Üye', `(${user})`)
  .addField('<a:syes1:751896954182697051> Banı Açan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:syes1:751896954182697051> Banı Açma Sebebi', "```" + reason + "```")
  modlog.send(embed);
  message.guild.members.unban(user);
  

  
  const embed2 = new Discord.MessageEmbed()
.setColor('#6a00ff')
     .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

  .setDescription(`<a:syes1:751896954182697051> Belirtiğiniz İD'nin Banı Açıldı`)
  message.channel.send(embed2)

  
};

exports.config = {
  name: 'unban',
  aliases: ['unban','yasak-kaldır','yasak-aç','ban-kaldır']
};
