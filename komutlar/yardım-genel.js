  
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#6a00ff')
.setAuthor(`Quick Genel Komutlar`, client.user.avatarURL())
.setDescription(`<a:diamond:779701424023273523> Quick botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Komut Sayısı__`,`<a:cark:724434925662503096> \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`<a:cark:724434925662503096> \`${prefix}davet\` Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`<a:cark:724434925662503096> \`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Profil__`,`<a:cark:724434925662503096> \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`<a:cark:724434925662503096> \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`<a:cark:724434925662503096> \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`<a:syes1:751896954182697051> \`${prefix}davet\` | Quick'i Sunucunuza Davet Edersiniz\n<a:syes1:751896954182697051> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:syes1:751896954182697051> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir  \n <a:syes1:751896954182697051> \`${prefix}sponsor\` | **Sponsorumuzun Discord Sunucusu**`)
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
