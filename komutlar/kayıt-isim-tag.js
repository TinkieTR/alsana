const Discord = require('discord.js');
const data = require('quick.db');
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setColor('#6a00ff').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• <a:noo:750777134548516874> \`s*isim-tag\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));

if(!args[0])  return message.channel.send(new Discord.MessageEmbed().setColor('#6a00ff').setTitle('Bir hata oldu!').setDescription(`<a:noo:750777134548516874> ${message.author} Bir **TAG** ve ya **SIMGE** koymayı unuttunuz.`));
if(args[0] === 'kapat') {
data.delete(`tagg.${message.guild.id}`);
return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setColor('#6a00ff').setDescription('Mesaj tag sistemi başarıyla kapatıldı.'));
} else {
data.set(`tagg.${message.guild.id}`, args[0]);
return message.channel.send(new Discord.MessageEmbed().setTitle('Başarılı!').setColor('#6a00ff').setDescription(`<a:syes1:751896954182697051> Mesaj tag sistemini başarıyla \`${args[0]}\` olarak seçtiniz.`));
}
};

exports.config = {
  name: 'isim-tag',
  aliases:[]
};