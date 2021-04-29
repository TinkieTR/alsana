const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#6a00ff')
.setAuthor(`Quick Eklenti Komutları`, client.user.avatarURL())
.setDescription(`<a:diamond:779701424023273523> Quick botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Kayıt Alınacak Rol__`,` <a:cark:724434925662503096> \`${prefix}alınacak-rol\` Kayıt Edince Alınacak Rol`,true)
.addField(`__Erkek Rol__`,` <a:cark:724434925662503096> \`${prefix}erkek-rol\` Erkek Rolü Belirtirsiniz.`,true)
.addField(`__Erkek Kayıt__`,` <a:cark:724434925662503096> \`${prefix}erkek @etiket <isim> <yaş>\`Erkek Kayıt Edersiniz.`,true)
.addField(`__Kayıt Hoşgeldin__`,` <a:cark:724434925662503096> \`${prefix}kayıt-hg\`  Kayıt Hoşgeldin Kanalı Belirtirsiniz.`,true)
.addField(`__Kayıt Kanal__`,` <a:cark:724434925662503096> \`${prefix}kayıt-kanal\` Kayıtın Yapılacağı Kanalı Ayarlarsınız. `,true)
.addField(`__Kayıtçı Rol__`,` <a:cark:724434925662503096> \`${prefix}kayıtçı-rol\`  Sadece Kimler Kayıt Edebilir.`,true)
.addField(`__Kız Rol__`,` <a:cark:724434925662503096> \`${prefix}kız-rol\` Kız Rolü Belirtirsiniz.`,true)
.addField(`__Kız Kayıt__`,` <a:cark:724434925662503096> \`${prefix}kız @etiket <isim> <yaş>\`Kız Kayıt Edersiniz.`,true)
.addField(`__Tag__`,` <a:cark:724434925662503096> \`${prefix}tag <tag>\` Kayıt Olanlara Tag Verir.`,true)
.addField(`__Kayıt Sayacı__`,` <a:cark:724434925662503096> \`${prefix}toplam-kayıt\` Kaç Adet Kayıt Yaptığınızı Görürsünüz.`,true)
.addField(`__Bilgilendirme__`,`<a:syes1:751896954182697051> \`${prefix}davet\` | Quick'i Sunucunuza Davet Edersiniz\n<a:syes1:751896954182697051> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:syes1:751896954182697051> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir  \n <a:syes1:751896954182697051> \`${prefix}sponsor\` | **Sponsorumuzun Discord Sunucusu**`)
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "kayıtsistemi",
  aliases: []
}
