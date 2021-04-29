const Discord = require('discord.js');
const db = require('quick.db')
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:noo:750777134548516874> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`kayıtkanal_${message.guild.id}`)  
 if(!rol) return message.channel.send(`<a:noo:750777134548516874> **Bu özellik zaten kapalı! :wink: **`)
 
 
  message.channel.send(`<a:syes1:751896954182697051>  **Kayıt Sistemi başarılı bir şekilde kapatıldı.**`)

 
  db.delete(`alınacakrol_${message.guild.id}`)  
  db.delete(`erkekrol_${message.guild.id}`) 
  db.delete(`kayıthg_${message.guild.id}`)  
  db.delete(`tagg.${message.guild.id}`)  
  db.delete(`kayıtkanal_${message.guild.id}`)
  db.delete(`kayıtçırol_${message.guild.id}`)
  db.delete(`kızrol_${message.guild.id}`)
  db.delete(`otoisim_${message.guild.id}`)
  db.delete(`kayıtsohbet_${message.guild.id}`)
  db.delete(`kayıtkanal_${message.guild.id}`)

};
exports.config = {
  name: 'kayıt-sistemi-kapat',
  aliases: []
};
