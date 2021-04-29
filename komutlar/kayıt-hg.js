const discord = require('discord.js')
const db = require('quick.db')
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 

    
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:noo:750777134548516874> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);


if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Hoş geldin kanalını sıfırlama komutu.`)
.setColor('#6a00ff')
.setDescription(`<a:siren:778777832976416778> Hoş geldin kanalı başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
message.channel.send(sıfırlandı)
db.delete(`kayıthg_${message.guild.id}`)
return;
}

let kanal = message.mentions.channels.first();   
if (!kanal) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Hoş geldin kanalını ayarlama komutu.`)
.setColor('#6a00ff')
.setDescription(`<a:noo:750777134548516874> Hoş geldin kanalı belirtiniz!`)
.setThumbnail(client.user.avatarURL())
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
message.channel.send(ayarlanmadı)
}
db.set(`kayıthg_${message.guild.id}`, kanal.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Hoş geldin kanalını ayarlama komutu.`)
.setColor('#6a00ff')
.setDescription(`<a:syes1:751896954182697051> Hoş geldin kanalı ${kanal} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL())
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
message.channel.send(ayarlandı)
  
}

exports.config = {
  name: 'kayıt-hg',
  aliases:[]
}