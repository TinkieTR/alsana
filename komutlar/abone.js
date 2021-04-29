let Discord = require("discord.js")
let database = require("quick.db")
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  
let abonesorumlusu = await database.fetch(`abonesorumlusu.${message.guild.id}`)
let abonemesaj = await database.fetch(`abonemesaj.${message.guild.id}`)//sharpen
let abonerol = await database.fetch(`abonerol.${message.guild.id}`)
  let abonekisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if(!abonerol) return message.channel.send(`${message.author} Verilecek Abone Rolü Ayarlı Değil!`).then(msg => msg.delete(1000))
  if(!abonemesaj) return message.channel.send(`${message.author} Abone Mesaj Kanalı Ayarlı Değil!`).then(msg => msg.delete(1000))
  if(!abonesorumlusu) return message.channel.send(`${message.author} Abone sorumlusu rolü ayarlanmamış!`).then(msg => msg.delete(1000))
  message.delete()
  let user = message.mentions.users.first()
  if(!message.member.roles.cache.has(abonesorumlusu)) return message.channel.send(`${message.author} Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`).then(msg => msg.delete(1000))
  
  if(!message.mentions.users.first()) return message.channel.send(`${message.author} Bir Üye Etiketle!`).then(msg => msg.delete(1000))
   await(abonekisi.roles.add(abonerol))
  const embed = new Discord.MessageEmbed()
  .setTitle(`Başarılı!`)
  .setThumbnail(`https://media.discordapp.net/attachments/803375309193216053/803631759630794822/standard.gif`)
  .addField(`・Yetkili:`, `${message.author}`, true)
  .addField(`・Abone:`, `${user}`, true)
  .addField(`・Verilen Rol:`,`<@&${abonerol}>`, true)
  .setColor('#6a00ff')
  .setFooter(`Quick | Abone-Rol Sistemi`)
    .setImage("https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif")
  message.guild.channels.cache.get(abonemesaj).send(embed).then(msg => msg.delete(100))
  
}//sharpen
exports.config = {
  name: 'abone',
  aliases: []
}

//sharpen//sharpen//sharpen