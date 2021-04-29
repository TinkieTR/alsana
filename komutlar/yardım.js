 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Quick Yardım Menüsü`, client.user.avatarURL())
.setColor('#6a00ff')
.setDescription(`<a:diamond:779701424023273523> Quick botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:cark:724434925662503096> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:cark:724434925662503096> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:cark:724434925662503096> \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<a:cark:724434925662503096> \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:cark:724434925662503096> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:cark:724434925662503096> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:syes1:751896954182697051> \`${prefix}davet\` | Quick'i Sunucunuza Davet Edersiniz\n<a:syes1:751896954182697051> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:syes1:751896954182697051> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir  \n <a:syes1:751896954182697051> \`${prefix}sponsor\` | **Sponsorumuzun Discord Sunucusu**`)
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}