const Discord = require("discord.js");
const db = require('quick.db')
const fynx = require('../ayarlar/bot.json')
module.exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix    
   if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**<a:noo:750777134548516874> Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.**");
    if (!args[0]) {
        return message.channel.send(`**<a:noo:750777134548516874> Hey Bu Komutu Kullanmak İçin Bir Kullanıcının ID'sini Belirtmen Gerek!**`)
   }
   var sebep = args.slice(1).join(" ");
   var pirate = args[0]
   var now = new Date()
   if (!sebep) {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(pirate)) {
                   return message.channel.send(`**<a:noo:750777134548516874> Bu Kullanıcı Zaten Yasaklanmış**`)
               }
               message.guild.ban(pirate, sebep)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<@!${user.id}> **adlı kullanıcı banlandı**`);
                   })
                   .catch(error => {
                       message.channel.send(`<a:noo:750777134548516874> Bir Hata Oluştu`);
                       console.error(':x: Hata:', error);
                   });
           });
   } else {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(pirate)) {
                   return message.channel.send(`<a:noo:750777134548516874> Bu Kullanıcı Zaten Yasaklanmış.`)
               }
               message.guild.ban(pirate, sebep)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<@!${user.id}> **sunucudan yasaklandı**`);
                   })
                   .catch(error => {
                       message.channel.send(`<a:noo:750777134548516874> Bir Hata Oluştu`);
                       console.error('Hata:', error);
                   });
           });
   }
 
}
exports.config = {
   name: "forceban",
   aliases: ['force-ban']
}