const Discord = require("discord.js")
const database = require("quick.db")//sharpen
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yetkin yetersiz')
  
  let mesaj = message.mentions.channels.first()
  if(!mesaj) return message.channel.send(
  new Discord.MessageEmbed()
  .setColor('#6a00ff')
  .setTitle('Abone Kanalını Etiketleyerek Tekrar Dener misin ?')
  .setFooter('Quick | Abone-Rol Sistemi'))
  //sharpen
  database.set(`abonemesaj.${message.guild.id}`, mesaj.id)
const tamam = new Discord.MessageEmbed()
.setColor('#6a00ff')
.setDescription(`Abone Mesaj Kanalı Başarıyla ${mesaj} Olarak Belirtildi!`)
message.channel.send(tamam)
}
exports.config = {
  name: 'abone-mesaj',
  aliases: []
}
