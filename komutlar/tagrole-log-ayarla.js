const Discord = require('discord.js');
const data = require('quick.db');
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed()
  .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/attachments/779780476071575574/782329055117836328/31.gif')
  .setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif')
                                                                                   .setTitle('Bir hata oldu!')
  .setDescription(`• <a:noo:750777134548516874> \`${client.ayarlar.prefix}tag-log \` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));
  if(!message.mentions.channels.first()) return message.channel.send(new Discord.MessageEmbed()
                                                                     
  .setColor('#00001')
  .setTitle('Bir hata oldu!')
                                                                        .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

  .setDescription('<a:noo:750777134548516874> Bir kanal etiketlemeyi unuttunuz.'));
  let mentionChannel = message.mentions.channels.first();
  data.set(`tag.log.${message.guild.id}`, mentionChannel.id);
  message.channel.send(new Discord.MessageEmbed()
                       .setColor('#6a00ff')

                       
.setTitle('İşte bu kadar!')
                          .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

.setDescription(`Tag kanalı başarıyla açıldı. ${mentionChannel} kanalı olarak seçtiniz.`));

};
exports.config = {
  name: 'tag-log',
  aliases:[]
};