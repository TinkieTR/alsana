const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "q!";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
  message.channel.send(`<a:noo:750777134548516874> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

    return;
  }
  let kanal = await db.fetch(`davetkanal_${message.guild.id}`)
  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("<a:noo:750777134548516874> Davet kanalı zaten ayarlanmamış!")
      .setFooter(bot.user.username, bot.user.avatarURL)
.setColor('#6a00ff')
    );
  }
  db.delete(`davetkanal_${message.guild.id}`)
  const embed = new Discord.MessageEmbed()
.setColor('#6a00ff')
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`Davet kanalı başarıyla sıfırlandı!`);
  message.channel.send(embed);
return
  
};
module.exports.config = {
  name: "davet-kanal-sıfırla",
  aliases: ["davetkanalsıfırla"]
};

