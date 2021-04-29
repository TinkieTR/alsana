
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#6a00ff')
.setAuthor(`Quick Davet Sistemi`, client.user.avatarURL())
.setDescription(`<a:diamond:779701424023273523> Quick botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`) 
.addField(`__Tag Ayarlama__`,` <a:cark:724434925662503096> \`${prefix}tag <tag>\` Sunucu Tagını Ayarlar.`,true)
.addField(`__Tag Log__`,`<a:cark:724434925662503096> \`${prefix}tag-log\` Birisi Tag Alınca Bildirim Gideceği Kanalı Ayarlar`,true)
.addField(`__Tag Log Sıfırla__`,`<a:cark:724434925662503096> \`${prefix}tag-log sıfırla\` Birisi Tag Alınca Bildirim Gideceği Kanalı Sıfırlar`,true)
.addField(`__Tag Rol__`,`<a:cark:724434925662503096> \`${prefix}tag-role\` Birisi Tag Alınca Otomatik Vereceği Rolü Ayarlar`,true)
.addField(`__Tag Rol Sıfırla__`,`<a:cark:724434925662503096> \`${prefix}tag-role sıfırla\` Birisi Tag Alınca Otomatik Vereceği Rolü Sıfırlar`,true)
.addField(`__Bilgilendirme__`,`<a:syes1:751896954182697051> \`${prefix}davet\` | Quick'i Sunucunuza Davet Edersiniz\n<a:syes1:751896954182697051> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:syes1:751896954182697051> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir  \n <a:syes1:751896954182697051> \`${prefix}sponsor\` | **Sponsorumuzun Discord Sunucusu**`)
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "tagsistemi",
  aliases: []
}
