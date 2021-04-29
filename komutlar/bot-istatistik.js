const Discord = require("discord.js");
const moment = require("moment");
const db = require('quick.db')
const os = require("os");
require("moment-duration-format");
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix   
  const payidarzaman = moment

    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
  .setColor('#6a00ff')
  .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
  .addField("**__Ping__**",`\`Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms\`\n \`Bot Gecikmesi: ${client.ws.ping}ms\``, true)
    .addField("**__Kullanıcı Sayısı__** ", `\`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\``, true)
    .addField("**__Sunucu Sayısı__**", `\`${client.guilds.cache.size.toLocaleString()}\``, true)
    .addField("**__Kanal Sayısı__**", `\`${client.channels.cache.size.toLocaleString()}\``, true)
    .addField("**__Aktiflik__**", `\`${payidarzaman}\``, true)
    .addField("**__Node.JS Versiyon__**", `\`${process.version}\``, true)
    .addField("**__Ram Kullanımı__**", `\`${(process.memoryUsage().heapUsed / 16384 / 15360).toFixed(2) + " MB"}\``, true)
    .addField("**__Toplam Ram__**", `\`16 GB\``, true)
    .addField("**__Discord.JS__**", `\`${Discord.version}\``, true)
    .addField("**__Konum__**", `\`Turkey\` :flag_tr:`, true)
    .addField("**__Bot Sahibi__**", "<@789901105240342569>", true)
    .addField("**__İşletim Sistemi__**", ` \`Windows 10 | 64 Bit\` `, true)
    .addField("**__CPU__**",` \`\`\`Intel(R) Xeon(R) CPU E5-2686 @ 2.30GHz\`\`\` `)

  return message.channel.send(istatistikler);
};
exports.config = {
  name: "botbilgi",
  aliases: []
};