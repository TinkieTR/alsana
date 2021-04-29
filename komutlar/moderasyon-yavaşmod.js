const Discord = require('discord.js');
const request = require('request')
const fynx =require("../ayarlar/bot.json");
const db = require("quick.db");
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`<a:noo:750777134548516874> **Bu komutu kullanabilmek için "\`Kanalları Yönet\`" yetkisine sahip olmalısın.**`);

  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                 .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

                .setDescription(`<a:noo:750777134548516874> **Doğru kullanım:**   \`${prefix}yavaşmod [0/120]\``)
.setColor('#6a00ff')
            message.channel.send({embed})
            return
          }
if (limit > 120) {
    return message.channel.send(new Discord.MessageEmbed()   .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif').setDescription("**Süre limiti maksimum** **120** **saniye olabilir.**").setColor("#ffd100"));
}
   message.channel.send(new Discord.MessageEmbed()   .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif').setDescription(`<a:hypesquad1:760825684305510410> **Yazma süre limiti** **${limit}** **saniye olarak ayarlanmıştır**`).setColor("#ffd100"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
exports.config = {
name: "yavaşmod",
aliases: ["slowmode", "yavaşmod"]
}