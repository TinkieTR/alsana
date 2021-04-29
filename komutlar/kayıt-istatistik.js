const Discord = require("discord.js");
const db = require('quick.db');
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  let kişi = message.mentions.users.first() || message.member
  let erkek = db.get(`erkekpuan_${message.author.id}`);
  let kız = db.get(`kızpuan_${message.author.id}`);
let toplam = erkek+kız
var embed = new Discord.MessageEmbed()
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setColor('#6a00ff')
.setDescription(`
●▬▬▬ <a:hkalp:781708345480183839> **Kayıt İstatistikleri** <a:hkalp:781708345480183839> ▬▬▬●

           > <a:syes1:751896954182697051>     • \`Yetkili\` • **${kişi}**
           > <a:syes1:751896954182697051>     • \`Toplam Üye Kayıt Sayısı\` • **${toplam}**
           > <a:syes1:751896954182697051>     • \`Toplam Erkek Kayıt Sayısı\` • **${erkek}**
           > <a:syes1:751896954182697051>     • \`Toplam Kadın Kayıt Sayısı\` • **${kız}**
              
●▬▬▬ <a:hkalp:781708345480183839> **Kayıt  İstatistikleri** <a:hkalp:781708345480183839> ▬▬▬●




`)
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
message.reply(embed)

}
exports.config = {
  name: 'toplam-kayıt',
  aliases:[]
};