const Discord = require("discord.js")
const database = require("quick.db")//sharpen
const fynx = require("../ayarlar/bot.json")



exports.run = async(client, message) => {//sharpen
  let prefix = await database.fetch(`prefix.${message.guild.id}`) || fynx.prefix 

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yetkin yetersiz')
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(
  new Discord.MessageEmbed()
  .setColor('#6a00ff')
  .setTitle('Abone Rolünü Etiketleyerek Dener misin ?')
  .setFooter('Quick | Abone-Rol Sistemi'))
    
  database.set(`abonerol.${message.guild.id}`, rol.id)
const oldu = new Discord.MessageEmbed()
  .setColor('#6a00ff')
  .setDescription(`Abone Rolü Başarıyla ${rol} Olarak Belirtildi!`)
  message.channel.send(oldu)
}
exports.config = {
  name: 'abone-rol',
  aliases: []
}