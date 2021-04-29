const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#6a00ff')
.setAuthor(`Quick Müzik Komutları`, client.user.avatarURL())
.setDescription(`<a:diamond:779701424023273523> Quick botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Müzik Oynat__`,`<a:cark:724434925662503096> \`${prefix}oynat\` İstediğiniz Şarkıyı Başlatır`,true)
.addField(`__Müziği Duraklat__`,`<a:cark:724434925662503096> \`${prefix}duraklat\` Şarkıyı Durdurur`,true)
.addField(`__Müziği Devam Ettir__`,`<a:cark:724434925662503096> \`${prefix}devam\` Şarkıyı Devam Ettirir`,true)
.addField(`__Müziği Geç__`,`<a:cark:724434925662503096> \`${prefix}atla\` Şarkıyı Atlar`,true)
.addField(`__Müziği Durdur__`,`<a:cark:724434925662503096> \`${prefix}durdur\` Şarkıyı Kapatıp Odadan Çıkar`,true)
.addField(`__Müzik Kuyruğu__`,`<a:cark:724434925662503096> \`${prefix}kuyruk\` Şarkı Kuyruğunu Gösterir`,true)
.addField(`__Müzik Döngüsü__`,`<a:cark:724434925662503096> \`${prefix}döngü\` Şarkıyı Döngüye Sokar`,true)
.addField(`__Ses Seviyesi__`,`<a:cark:724434925662503096> \`${prefix}ses\` Ses Seviyesini Ayarlarsınız`,true)
.addField(`__Kuyruğu Temizle__`,`<a:cark:724434925662503096> \`${prefix}kuyruk-temizle\` Kuyruk Listesini Temizler`,true)
.addField(`__Kuyruğu Karıştır__`,`<a:cark:724434925662503096> \`${prefix}karıştır\` Kuyruktaki Şarkıları Karıştırır`,true)
.addField(`__Bilgilendirme__`,`<a:syes1:751896954182697051> \`${prefix}davet\` | Quick'i Sunucunuza Davet Edersiniz\n<a:syes1:751896954182697051> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:syes1:751896954182697051> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir  \n <a:syes1:751896954182697051> \`${prefix}sponsor\` | **Sponsorumuzun Discord Sunucusu**`)
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "müzikkkkkkkkkkkkkkkkkkkkk",
  aliases: []
}
