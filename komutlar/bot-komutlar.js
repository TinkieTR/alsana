const Discord = require('discord.js')
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Quick - Komut Sayısı`)
    .setDescription('**\n<a:syes1:751896954182697051> Quick Bot | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
.setColor('#6a00ff')
    .setThumbnail('https://i.ibb.co/s2qGRFx/kod.png')
    .setTimestamp()
    .setFooter("Quick | Gelişmiş Türkçe Bot | 2021" , client.user.avatarURL())

    return message.channel.send(embed);
    
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

