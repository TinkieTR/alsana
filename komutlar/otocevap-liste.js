const Discord = require("discord.js")
const db = require('quick.db')

const fynx = require('../ayarlar/bot.json')
exports.run = async (bot, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
            let komut = await db.fetch(`sunucuKomut_${message.guild.id}`)

                     let gonderileceksey = await db.fetch(`sunucuMesaj_${message.guild.id}`)
                     if(!komut) await db.set(`sunucuKomut_${message.guild.id}`, 'Bulunmuyor.')
                  
                  
                     let welcomeEmbed = new Discord.MessageEmbed()
                        .setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')

                     .addField(`Mevcut özel komutlar.`, `\`${komut}\``)
.setColor('#6a00ff')
                        message.channel.send(welcomeEmbed)
                     };

exports.config = {
  name: "otocevap-liste",
  aliases: ['otocevapliste','oto-cevap-liste']
};

