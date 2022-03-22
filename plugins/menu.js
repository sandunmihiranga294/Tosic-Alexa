const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/8c6df73435c9c11576875.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━✨️SADUWA YT✨️━━━━⛦


*Hello I am Tosic-Alexa Bot.*
  
   ᶜʳᵉᵃᵗᵉᵈ ᵇʸ ˢᵃⁿᵈᵘⁿ ᴹⁱʰⁱʳᵃⁿᵍᵃ.

■□■□■□■□■□■□■□■□■□■□
♕ *𝙈𝙚𝙙𝙞𝙖 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♕

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -song <text>
🍙𝙐𝙨𝙚➜ Downloads song for you.
⚠️.song  look at me

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -video <yt link>
🍙𝙐𝙨𝙚➜ Downloads video from YouTube link.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -insta <link>
🍙𝙐𝙨𝙚➜   Downloads content from instagram.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -yt<text>
🍙𝙐𝙨𝙚➜   Gives you YT links.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -show <show name>
🍙𝙐𝙨𝙚➜   Get info related to tv series and shows.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -gif 
🍙𝙐𝙨𝙚➜ Converts video to gif.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -tomp3 
🍙𝙐𝙨𝙚➜ Converts video into audio.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -say <text>
🍙𝙐𝙨𝙚➜ Converts text into voice.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -img <text>
🍙𝙐𝙨𝙚➜ It sends image from google.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trt <language code>
🍙𝙐𝙨𝙚➜ Translate the text you tag.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wiki <text>
🍙𝙐𝙨𝙚➜ It sends Wikipedia result.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -lyric <text>
🍙𝙐𝙨𝙚➜ Finds the lyrics of the song.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -covid <country code>
🍙𝙐𝙨𝙚➜ Send the covid stats of your country.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -weather <city>
🍙𝙐𝙨𝙚➜ Tells you about the weather of your place.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -removebg 
🍙𝙐𝙨𝙚➜ Removes the background of tge image.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ocr
🍙𝙐𝙨𝙚➜ Finds the text written on the image.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -wallpaper
🍙𝙐𝙨𝙚➜ It sends you random wallpaper.

■□■□■□■□■□Alexa■□■□■□■□■□
♟ *𝙁𝙪𝙣 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♟

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -joke 
🍙𝙐𝙨𝙚➜ It sends a random joke.
 
➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -meme <text>
🍙𝙐𝙨𝙚➜ Cations the image into a meme.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -quote 
🍙𝙐𝙨𝙚➜ It sends a random quote.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -ss <website link>
🍙𝙐𝙨𝙚➜ It sends the screenshot of the website.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -changesay <text>
🍙𝙐𝙨𝙚➜ Converts text into changesay meme image.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -trumpsay
🍙𝙐𝙨𝙚➜ Convert text into Trump's tweet.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -compliment 
🍙𝙐𝙨𝙚➜ Gives you a compliment.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -bitly <link>
🍙𝙐𝙨𝙚➜   Shorten your link.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -dict 
🍙𝙐𝙨𝙚➜   Dictionary [-dict en;anime]

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -zodiac <leo> 
🍙𝙐𝙨𝙚➜   Tells you about your horoscope.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -qr <text>
🍙𝙐𝙨𝙚➜   Converts text into qr code.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -movie 
🍙𝙐𝙨𝙚➜  Gives you info about movie.
⚠️movie master

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜  -anime <text>
🍙𝙐𝙨𝙚➜  Gives you info about anime.
⚠️anime Alexa
■□■□■□■□■Alexa□■□■□■□■□■□
♝ *𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨* ♝

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -sticker 
🍙𝙐𝙨𝙚➜ Converts img/gif into a sticker.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -photo 
🍙𝙐𝙨𝙚➜ Converts sticker into image.

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -attp <text>
🍙𝙐𝙨𝙚➜ Converts text into glowing sticker.
⚠️ex  attp alexa

➡️𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ -xmedia
🍙මාධ්‍ය 25 කට අධික සැකසුම් ක්‍රම පෙන්වයි


➡️𝘼𝘿𝙈𝙄𝙉 𝘾𝙊𝙈𝙈𝘼𝙉𝘿👇

➡️ -add 94××××××××
🍙 යමෙකු සමූහයට එක් කරන්න.

➡️ -kick
🍙 යමෙකු සමූහයෙන් නෙරපන්න.

➡️ -welcome
🍙 ඔබට අවශ්‍ය පිලිගැනීමේ පණිවිඩය සකසන්න.

➡️ -antilink on
🍙 සමූහය තුල link දමන අයෙකු kick කරන්න.

➡️ -antilink off
🍙 සමූහය තුල link දැමීම ආරම්භ කරන්න.

➡️ -promote
🍙 සමූහය තුල ඇති අයෙකුගේ තනතුර ඉහල දමයි 

➡️ -demote
🍙 සමූහය තුල ඇති අයෙකුගේ තනතුර පහත හෙලයි.

➡️ -mute
🍙 සමූහ කතාබස් නිහඩ කරන්න.

➡️ -unmute
🍙 සමූහ කතාබස් ආරම්භ කරන්න.

➡️ -invitelink
🍙 සමූහයේ සබැදිය ලබාගන්න.

➡️ -locate
🍙 පුද්ගලයෙකුගේ ස්ථානය ලබාගන්න.

➡️ -afk
🍙 ඔබ වැඩක සිටින බව අන් අයට දන්වන්න.

➡️ -update now
🍙 Bot ව අප්ඩේට් කිරීම සදහා භාවිත කරන්න.


➡️𝙈𝘼𝙆𝙀𝙍 𝙈𝙀𝙉𝙐

➡️ -ff12 Sandun Mihiranga
🍙️ එලෙස ඔබට අවශ්‍ය Free fire image 1සිට 50තෙක් සාදන්න.

➡️ -devil
➡️ -ninja
➡️ -bear
➡️ -wolf
➡️ -neon
➡️ -2neon
➡️ -3neon
➡️ -future
➡️ -light
➡️ -joker
➡️ -glitter
➡️ -bokeh
➡️ -marvel
➡️ -2marvel
➡️ -avengers
➡️ -garaf
➡️ -2graf
➡️ -lion
➡️ -ice
➡️ -space
➡️ -smoke
➡️ -glow
➡️ -fire
➡️ -harry
➡️ -cup
➡️ -cemetary
➡️ -glich
➡️ -yasai
➡️ -uddika
➡️ -aah
➡️ -sir
➡️ -fuck
➡️ -asayi
➡️ -hapoi
➡️ -quby1
➡️ -quby2
➡️ -quby3
➡️ -quby4
➡️ -cat1
➡️ -cat2
➡️ -cat3
➡️ -cat4
■□■□■□■□■□■□■□■□
═════💢Alexa💢═════
▣▣▣▣▣ˢᵃⁿᵈᵘⁿ ᴹⁱʰⁱʳᵃⁿᵍᵃ▣▣▣▣▣

`}) 

}));
