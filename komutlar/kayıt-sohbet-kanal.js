const discord = require('discord.js')
const db = require('quick.db')

const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 

 if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send('<a:noo:750777134548516874> **Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın! **')
	
    if(!args[0])  return message.channel.send(new discord.MessageEmbed().setColor('#f6ff00').setDescription('> **Davet-Log Sisteminde ne yapmak istediğini belirtmedin** <a:loading:779796972533710868> \n> `s*davet-log ayarla #kanal` **Davet-Log Sistemini Ayarlar** \n> `q!davet-log sıfırla` **Davet-Log Sistemini Sıfırlar.**'))

if (args[0] === 'sıfırla') {
  let kayıtsohbet = db.fetch(`kayıtsohbet_${message.guild.id}`)
  if (!kayıtsohbet) return message.channel.send(`<a:noo:750777134548516874> Sohbete Yazı Zaten Ayarlanmadığı İçin Sıfırlanamaz! `)
  message.channel.send(`<a:syes1:751896954182697051> | **Sohbet Kanalı Başarıyla Sıfırlandı!**`)
  db.delete(`kayıtsohbet_${message.guild.id}`)
  return;
}

  if (args[0] === 'ayarla') {
let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(`<a:noo:750777134548516874> | **Sohbet Kanalını Belirtmelisin!** `)

db.set(`kayıtsohbet_${message.guild.id}`, kanal.id)

message.channel.send(`<a:syes1:751896954182697051> | **Birisi Kayıt Olunca Hoşgeldin Mesajını ${kanal}'a Atacağım!**`)
  }
}
exports.config = {
  name: 'kayıt-mesaj',
  aliases:[]
}