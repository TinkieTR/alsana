const Discord = require("discord.js");
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";  
const db = require("quick.db");
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 


const onerisiz = new Discord.MessageEmbed()
.setColor(AloneHata)
.setTitle("• Hata: 0014 •")
.setDescription("**<a:noo:750777134548516874> Öneri gönderebilmek için bir öneri belirtiniz.**")
.setFooter(`Quick©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2021`);

const onerili = new Discord.MessageEmbed()
.setColor(AloneDogru)
.setTitle("Quick | Başarılı")
.setDescription("<a:syes1:751896954182697051> **Öneriniz alınmıştır! Teşekkür ederiz.**")
.setFooter(`Quick©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2021`);  
  

  var öneri = args.slice(0).join(" ");
 
  var guildID = "803375309193216050"; // Sunucu ID
 
  var channelID = "803623430728974356"; // Kanal ID
 
  if (!öneri) {
    return message.channel.send(onerisiz);
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
.setColor('#6a00ff')
 
      .setAuthor("Yeni Bir Öneri!", client.user.avatarURL())
 
      .addField("<a:syes1:751896954182697051> • Öneren Kullanıcı:", message.author.tag, true)
 
      .addField("<a:syes1:751896954182697051> • Öneren Kullanıcı ID:", message.author.id,true)
 
      .addField("<a:syes1:751896954182697051> • Önerisi:", öneri)
    
      .setThumbnail(message.author.avatarURL());
 
    client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);

    message.channel.send(onerili);
  }
};
 
exports.config = {
  name: "öneri",
  aliases: ["istek"],
};

 