const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 

let eklenti = new Discord.MessageEmbed()  
.setColor('#6a00ff')
.setAuthor(`Quick Eklenti Komutları`, client.user.avatarURL())
.setDescription(`<a:diamond:779701424023273523> Quick botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Kayıt Sistemi__`,`<a:cark:724434925662503096> \`${prefix}kayıtsistemi\` Gelişmiş Kayıt Sistemi`,true)
.addField(`__Davet Sistemi__`,`<a:cark:724434925662503096> \`${prefix}davetsistemi\` Gelişmiş Davet Sistemi`,true)
.addField(`__Oto-Cevap Sistemi__`,`<a:cark:724434925662503096> \`${prefix}cevapsistemi\` Gelişmiş Cevap Sistemi`,true)
.addField(`__Tag-Rol Sistemi__`,`<a:cark:724434925662503096> \`${prefix}tagsistemi\` Gelişmiş Tag-Rol Sistemi`,true)
.addField(`__Abone-Rol Sistemi__`,`<a:cark:724434925662503096> \`${prefix}abonesistemi\` Gelişmiş Abone-Rol Sistemi`,true)
.addField(`__Bilgilendirme__`,`<a:syes1:751896954182697051> \`${prefix}davet\` | Quick'i Sunucunuza Davet Edersiniz\n<a:syes1:751896954182697051> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:syes1:751896954182697051> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir  \n <a:syes1:751896954182697051> \`${prefix}sponsor\` | **Sponsorumuzun Discord Sunucusu**`)
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
                     
  }
  ;
exports.config = {
name: "eklenti",
  aliases: []
}
