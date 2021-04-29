const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:noo:750777134548516874> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || "q!";


  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
.setColor('#6a00ff')
    .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

      .setTitle("Rol Koruma sistemi!")
      .setDescription(
        "**Hatalı kullanım! örnek: ${prefix}rol-koruma aç && kapat**"
      );

    message.channel.send(embed);
    return;
  }
  let rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
      const embed = new Discord.MessageEmbed()
.setColor('#6a00ff')
      .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

        .setTitle("Rol Koruma sistemi!")
        .setDescription("**Görünüşe göre rol koruma zaten aktif!**");

      message.channel.send(embed);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const embed = new Discord.MessageEmbed()
.setColor('#6a00ff')
      .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

        .setTitle("Rol Koruma sistemi!")
        .setDescription("**Rol koruma başarıyla açıldı!**");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
.setColor('#6a00ff')
    .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

      .setTitle("Rol Koruma sistemi!")
      .setDescription("**Rol Koruma başarıyla kapandı!**");

    message.channel.send(embed);
  }
};
exports.config = {
  name: "rolkoruma",
  aliases: ["rol-koruma"]
};
