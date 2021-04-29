const Discord = require('discord.js');
const db = require('quick.db')
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix  
      if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:noo:750777134548516874> **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);

	if (!message.guild) return message.author.send('<a:noo:750777134548516874> **Bu Komutu Sunucuda Kulanabilirsiniz**');

    let kullanici = args[0];
    if (!kullanici) return message.channel.send("<a:noo:750777134548516874> **Banlanan Bir kullanıcının ID'sini belirtmen gerek**")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(`<a:noo:750777134548516874> **Bu kullanıcı banlanmamış.**`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {

const Embed = new Discord.MessageEmbed()
.setColor('#6a00ff')
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

.setAuthor('Quick | Ban Sorgulama', client.user.avatarURL())
.setDescription(`<a:syes1:751896954182697051> ${user.tag} **Adlı Kullanıcının Ban Nedeni:** \n\n**${reason || "Neden Belirtilmemiş"}**`)
message.channel.send(Embed)
    })
    }

exports.config = {
    name: 'bansorgulama',

    aliases: ['bansorgu','ban-sorgulama','ban-sorgu']
};


