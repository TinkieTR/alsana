  
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let abone = new Discord.MessageEmbed()  
.setColor('#6a00ff')
.setAuthor(`Quick Abone-Rol Komutlar`, client.user.avatarURL())
.setDescription(`<a:diamond:779701424023273523> Quick botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Abone Sorumlusu__`,`<a:cark:724434925662503096> \`${prefix}abone-sorumlusu\` Abone Komutunu Kullanacak Yetkili Rol`,true)
.addField(`__Abone Mesaj__`,`<a:cark:724434925662503096> \`${prefix}abone-mesaj\` Abone Rolü Verilince Mesaj Gidecek Kanal`,true)
.addField(`__Abone Rol__`,`<a:cark:724434925662503096> \`${prefix}abone-rol\` Abone Rolünü Belirtirsiniz`,true)
.addField(`__Abone__`,`<a:cark:724434925662503096> \`${prefix}abone\` Kişiye Abone Rolünü Verirsiniz`,true)
.addField(`__Bilgilendirme__`,`<a:syes1:751896954182697051> \`${prefix}davet\` | Quick'i Sunucunuza Davet Edersiniz\n<a:syes1:751896954182697051> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:syes1:751896954182697051> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir  \n <a:syes1:751896954182697051> \`${prefix}sponsor\` | **Sponsorumuzun Discord Sunucusu**`)
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
.setThumbnail(client.user.avatarURL)
 message.channel.send(abone) 
  };
exports.config = {
name: "abonesistemi",
  aliases: []
}
