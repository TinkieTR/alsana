const Discord = require(`discord.js`)
const db = require('quick.db')
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix   
  let user = message.mentions.users.first() || message.author
  if(user){
    
const embed = new Discord.MessageEmbed()
//.setAuthor(`${user.tag} adlı kullanıcının avatarı:`)
 .setDescription(`<@${message.author.id}> İstediğin Kişinin Avatarı:`)
.setImage(user.displayAvatarURL({dynamic:true})) 
.setTimestamp()
.setColor('#f6ff00')
message.channel.send(embed)
 }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["avatar","avatarım"],
    permLevel: 0
}

exports.config = {
    name: 'pp',
  aliases:[]

}