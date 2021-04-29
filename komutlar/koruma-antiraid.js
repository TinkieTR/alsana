const Discord = require("discord.js");
const db = require("quick.db");
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:noo:750777134548516874> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  if (args[0] == "aç") {
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send("<a:noo:750777134548516874> Anti-raid zaten açılmış.");
    }
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("Anti-raid sistemi başarıyla açıldı");
  }
 
  if (args[0] == "kapat") {
    if (db.has(`antiraidK_${message.guild.id}`) === false) {
      return message.channel.send(
        "<a:noo:750777134548516874> Anti-raid açılmamış. Açmak için **q!anti-raid aç**"
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("Anti-raid sistemi başarıyla kapatıldı");
  }
  if (!args[0])
    return message.reply(
      "Lütfen geçerli işlem girin. Örnek: **anti-raid aç/kapat**"
    );
};
exports.config = {
  name: "anti-raid",
  aliases: []
};

 