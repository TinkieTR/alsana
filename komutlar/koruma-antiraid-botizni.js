const Discord = require("discord.js");
const db = require("quick.db");
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:noo:750777134548516874> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  if (db.has(`antiraidK_${message.guild.id}`) === false) {
    return message.channel.send(
      "Anti-raid açılmamış. Açmak için **q!anti-raid aç**"
    );
  }
  if (!args[1]) return message.reply("<a:noo:750777134548516874> Lütfen bir bot id si girin");
 
  if (isNaN(args[1])) {
    return message.reply("Sadece ID");
  }
  if (args[0] == "ver") {
    client.users.get(args[0]);
    db.set(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + "ID li bota izin verildi");
  }
  if (args[0] == "kaldır") {
    db.delete(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + " ID li botun izni kaldırıldı");
  }
};
exports.config = {
  name: "bot-izni",
  aliases: []
};

 