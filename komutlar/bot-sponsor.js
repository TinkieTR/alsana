const Discord = require('discord.js');
const db = require('quick.db')
const client = new Discord.Client();
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  const embed = new Discord.MessageEmbed()
  .setColor('#6a00ff')
  .setDescription(`**Sponsor: [Dark Sunucu Hizmetleri](https://discord.gg/jnrhSKjcX6)\nYardımı: VDS**`)
  .setTitle(`Quick Bot`)
message.channel.send(embed)
 }
exports.config = {
  name: 'sponsor',
  aliases: []
};