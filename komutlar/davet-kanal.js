const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "q!";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
   message.channel.send(`<a:noo:750777134548516874> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
    return;
  }
  let kanal = message.mentions.channels.first();
  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("<a:noo:750777134548516874> **Lütfen bir kanal belirtiniz!**")
      .setFooter(bot.user.username, bot.user.avatarURL)
.setColor('#6a00ff')
    );
  }
  const embed = new Discord.MessageEmbed()
.setColor('#6a00ff')
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`Davet kanalı; ${kanal} olarak ayarlandı!`);
  message.channel.send(embed);
  db.set(`davetkanal_${message.guild.id}`, kanal.id);
};
module.exports.config = {
  name: "davet-kanal",
  aliases: ["davetkanal"]
};

