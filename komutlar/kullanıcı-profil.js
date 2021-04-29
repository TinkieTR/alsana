
const Discord = require('discord.js')
const db = require('quick.db')
const moment = require('moment')
const client = new Discord.Client();
const fynx = require('../ayarlar/bot.json')
const botadi = "Quick"

exports.run = async (bot, msg, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 

        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
  
        let userinfo = {};
        userinfo.avatar= user.avatarURL();
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "Oynadığı bir oyun yok"
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `:red_square: > | **Rahatsız Etmeyin**`)
        .replace("online", `:green_square: > | **Çevrimiçi**`)
        .replace("idle", `:yellow_square: > | **Boşta**`)
        .replace("offline", `:black_large_square: > | **Çevrimdışı**`)

        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)

        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')

        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)

        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)

        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
 
        const uembed = new Discord.MessageEmbed()
        .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .setTitle('Kullanıcı Hakkında Bilgiler')
        .addField(`Durum`, userinfo.status, false)
.setColor('#6a00ff')
        .addField(`Katılım Tarihi (Sunucu)`, userinfo.dctarihkatilma, false)
        .addField(`Katılım Tarihi (Discord)`, userinfo.dctarih, false)
        .addField(`Kimlik`, userinfo.id, true)
        .addField(`Bot mu?`, userinfo.bot, true)
        .setFooter(`Quick Bot | Kullanıcı Bilgi Sistemi`)
        msg.channel.send(uembed)
    }

exports.config = {
  name: 'profil',
  aliases: []
};



