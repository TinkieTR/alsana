const Discord = require('discord.js')
const db = require('quick.db')
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  {
   if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:noo:750777134548516874> **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);
 
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.MessageEmbed()
       .setTitle(`<a:noo:750777134548516874> **Banlanan Kullanıcı bulunamadı**`)
.setColor('#6a00ff')
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.MessageEmbed()
       .setTitle("<a:noo:750777134548516874> Banlistesi | Sunucudan Banlananlar")
       .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

.setColor('#6a00ff')
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.username}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
    
   });
  }
  }
module.exports.config = {
  name: 'banlananlar',
  aliases: ["banlılar","banliste", "bansay"]
};
