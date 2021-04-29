const Discord = require('discord.js');
const data = require('quick.db');

const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await data.fetch(`prefix.${message.guild.id}`) || fynx.prefix  
   if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/779780476071575574/782329055117836328/31.gif').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setColor('#f6ff00').setTitle('Bir hata oldu!').setDescription(`• \`s*tag\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));

if(!args[0])  return message.channel.send(new Discord.MessageEmbed()
.setColor('#6a00ff')
                                          .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

.setTitle('Bir hata oldu!')
.setDescription(`<a:noo:750777134548516874> ${message.author} Bir **TAG** ve ya **SIMGE** koymayı unuttunuz.`));
if(args[0] === 'kapat') {
data.delete(`tag.${message.guild.id}`);
return message.channel.send(new Discord.MessageEmbed()
.setTitle('İşte bu kadar!')
.setColor('#6a00ff')
                            .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

.setDescription('Mesaj tag sistemi başarıyla kapatıldı.'));
} else {
data.set(`tag.${message.guild.id}`, args.slice(0).join(' '));
return message.channel.send(new Discord.MessageEmbed()
.setTitle('İşte bu kadar!')
.setColor('#6a00ff')
                            .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

.setDescription(`Mesaj tag sistemini başarıyla \`${args.slice(0).join(' ')}\` olarak seçtiniz.`));
}
};
exports.config = {
  name: 'tag',
  aliases:[]
};