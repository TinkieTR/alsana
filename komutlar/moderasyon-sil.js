const Discord = require("discord.js");
const db = require("quick.db")
const fynx = require('../ayarlar/bot.json')
module.exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  //

  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      "<a:noo:750777134548516874> **Bu komutu kullanmak için Mesajları Yönet yetkisine sahip olmalısın.**"
    );
  if (!args[0])
    return message.reply(
      "<a:noo:750777134548516874> **En Az** `1 - 100` **Arasında Bir Tam Sayı Değeri Girmelisiniz.**"
    );
  message.channel.bulkDelete(args[0]).then(() => {
   const tamamdır = new Discord.MessageEmbed()
.setColor('#6a00ff')
   .setThumbnail('https://cdn.discordapp.com/attachments/767544528537649193/774057334862512128/Geri-Donusum-Sembolleri-90859.gif')
  .setTitle('BAŞARILI')
   .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
  .addField(`\`${message.author.username}\`  <a:syes1:751896954182697051>  Başarıyla **${args[0]}** Mesajı Sildim`,`Quick İyi Muhabbetler Diler...`)
 message.channel.send(tamamdır)
    message.react('👍')
   
   });
};

exports.config = {
  name: "sil",
  aliases:[]
}; 
