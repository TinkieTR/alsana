const discord = require('discord.js')
const db = require('quick.db')

const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`<a:noo:750777134548516874> Bu Komudu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`);

if (args[0] === 'sıfırla') {
  let isim = db.fetch(`otoisim_${message.guild.id}`)
  if (!isim) return message.channel.send(`<a:noo:750777134548516874> Oto İsim AYarlanmadığı İçimn Sıfırlanamaz!`)
  message.channel.send(`Oto İsim Sıfırlandı! <a:syes1:751896954182697051>`)
  db.delete(`otoisim_${message.guild.id}`)
  return;
}

let isim = args.slice(0).join(' ')
if (!isim) return message.channel.send(`İsim Belirtiniz! <a:noo:750777134548516874>`)

db.set(`otoisim_${message.guild.id}`, isim)

message.channel.send(`Oto İsim \`${isim}\` Olarak Ayarlandı! <a:syes1:751896954182697051>`)
  
}

exports.config = {
  name: 'otoisim',
  aliases:[]
}