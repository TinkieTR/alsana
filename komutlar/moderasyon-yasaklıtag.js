const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => { 
  const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:noo:750777134548516874> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  
if(!args[0]) return message.channel.send(`<a:noo:750777134548516874> Yasaklı tag sistemini kullanabilmek için: ${prefix}**yasaklı-tag ekle tag** yazmalısın.`)
let argümanlar = ['ekle', 'çıkar']
if(!argümanlar.includes(args[0])) return message.channel.send(`<a:noo:750777134548516874> Sadece ${prefix}**yasaklı-tag ekle**/**çıkar** kullanabilirsin.`)
  
if(args[0] === 'ekle') {
  
const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(tag) return message.channel.send(`<a:noo:750777134548516874> Sadece bir tag ekleyebilirsin.`)
if(!args[1]) return message.channel.send(`<a:noo:750777134548516874> Bir tag yazmalısın.`)
  
await db.set(`banned-tag.${message.guild.id}`, args[1])
  
message.channel.send(new Discord.MessageEmbed()
                        .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

.setDescription(`<a:syes1:751896954182697051> **${args[1]}** tagı yasaklı olarak listeye eklendi.`)
.setColor('#6a00ff')
.setAuthor(message.author.username, message.author.avatarURL)) 
}
  
  
if(args[0] === 'çıkar') {
  
const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(!tag) return message.channel.send(`<a:noo:750777134548516874> Hiç tag eklememişsin.`)
if(!args[1]) return message.channel.send(`<a:noo:750777134548516874> Bir tag yazmalısın.`)
  
await db.delete(`banned-tag.${message.guild.id}`)
  
message.channel.send(new Discord.MessageEmbed()
                        .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

.setDescription(`<a:syes1:751896954182697051> **${args[1]}** tagı artık yasaklı değil..`)
.setColor('#6a00ff')
.setAuthor(message.author.username, message.author.avatarURL)) 
}
  

};
exports.config = {
  name: 'yasaklı-tag',
  aliases: []
};
