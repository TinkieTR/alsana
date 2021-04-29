const Discord = require('discord.js');
const db = require('quick.db')
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:noo:750777134548516874> **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);


   let question = args.join(' ');

   let user = message.author.username
     const embedd = new Discord.MessageEmbed()

     .addField(`<a:noo:750777134548516874> Yazı Yazman Gerek`);
   
   if (!question) return message.channel.send(embedd).then(m => m.delete(5000)); 

       const embed = new Discord.MessageEmbed()

.setColor('#6a00ff')
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Quick', client.user.avatarURL)

       .addField(`**Quick  | Oylama**`, `**${question}**`);
   
     message.channel.send(embed).then(function(message) {

         message.react('👍🏻');

         message.react('👎🏻');

       });

     };

exports.config = {
name: "oylama",
aliases: ["oylama-yap"]
};

