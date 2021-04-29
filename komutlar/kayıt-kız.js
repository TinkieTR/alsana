const discord = require('discord.js')
const db = require('quick.db')
const fynx = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 

let tag = db.fetch(`tag.${message.guild.id}`);
let kayıtsohbet = db.fetch(`kayıtsohbet_${message.guild.id}`)
let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let kızrol = db.fetch(`kızrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)  
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(`<a:noo:750777134548516874> Bu komudu kullanabilmen için <@&${kayıtçı}> adlı role sahip olman lazım!`)
if(message.channel.id !== kanal) return message.channel.send(`<a:noo:750777134548516874> Bu komudu sadece <#${kanal}> adlı kanalda kullanabilirsin!`)
if (!kızrol) return message.channel.send(`<a:noo:750777134548516874> Sunucuda kız rolü ayarlanmadığı için komut kullanılamaz!`)
let member = message.mentions.members.first();
if (!member) return message.channel.send(`<a:noo:750777134548516874> Kız olarak kayıt edeceğin kullanıcıyı belirtmelisin!`)
let isim = args[1]
if (!isim) return message.channel.send(`<a:noo:750777134548516874> İsmini belirtmelisin!`)
let yaş = args[2]
if (!yaş) return message.channel.send(`<a:noo:750777134548516874> Yaşını belirtmelisin!`)
if(isim && member) member.setNickname(`${tag} ${isim} | ${yaş}`); 
if(isim && !tag) member.setNickname(`${isim} | ${yaş}`);
member.roles.remove(alınacakrol)
member.roles.add(kızrol) 
const kayıtolan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) //üyeyi çekiyoruz yani hem etiket hemde id ile olur.
db.add(`kızpuan_${message.author.id}`, 1)
const hg = new discord.MessageEmbed()
.setColor('#6a00ff')
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
.setDescription('<a:hype:778788019548454912> KAYIT BİLGİLERİN ŞUNLAR ;')
.addField( `**Kaydın Başarıyla Yapıldı! <a:syes1:751896954182697051>**`,
    `<:sagok:778774307253518366> **Kayıt Edilen Kişi: ${kayıtolan}**
     <:sagok:778774307253518366> **Kayıt Eden Yetkili: ${message.author}**
     <:sagok:778774307253518366> **Kayıt İşleminde Verilen Rol: <@&${kızrol}>**
     <:sagok:778774307253518366> **Kayıt İşleminde Alınan Rol: <@&${alınacakrol}>**
     <:sagok:778774307253518366> **Eski İsim: ${tag} İsim | Yaş**
     <:sagok:778774307253518366> **Yeni İsim: ${tag} ${isim} | ${yaş}** 
   `)
.setFooter(`TAG Ayarlanmadıysa Undefined Yazması Normaldir!`);        
message.guild.channels.cache.get(kayıtsohbet).send(hg);
  
const başarılı = new discord.MessageEmbed()
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setAuthor('🌟 Quick | Kız Kayıt',client.user.avatarURL() )  
.setColor('#6a00ff')
.setDescription(`\`Kız olarak kayıt edilen kullanıcı:\` \n${member} \n\n \`Kız olarak kayıt eden yetkili:\` \n<@!${message.author.id}>`)
.addField(`Kullanıcının ismi:`, `**\`\`\`${isim}\`\`\`**`, true)
.addField(`Kullanıcının yaşı:`, `**\`\`\`${yaş}\`\`\`**`, true)
.setImage('https://media.discordapp.net/attachments/803375309193216053/803420360628109322/standard_1.gif')
message.channel.send(başarılı)
db.add(`kayıtsayı_${message.author.id}`, 1)
}

exports.config = {
  name: 'kız',
  aliases:[]
}