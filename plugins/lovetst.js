const Asena = require('../events');
const fs = require('fs');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const chalk = require('chalk');
const axios = require('axios');


  Asena.addCommand({pattern: 'love', fromMe: false,desc:' සමූහයක අයෙකුට ආදරේ ප්‍රකාශ කරන්න 🤗' }, (async (message, match) => {

    await message.sendMessage('*I*');

    await message.sendMessage('*I L*');

    await message.sendMessage('*I Lo*');

    await message.sendMessage('*I Lov*');

    await message.sendMessage('*I Love*');

    await message.sendMessage('*I Love Y*');

    await message.sendMessage('*I Love Yo*');

    await message.sendMessage('😍 *I Love Youuu* 😍');

    await new Promise(r => setTimeout(r, 1000));

    await message.sendMessage('*S*');

    await message.sendMessage('*So*');

    await message.sendMessage('*So M*');

    await message.sendMessage('*So Mu*');

    await message.sendMessage('*So Muc*');

    await message.sendMessage('💕 *So Much* 💞');

    await new Promise(r => setTimeout(r, 1000));

   var image = await axios.get ('https://telegra.ph/file/2c1130ed7ccb22a507547.jpg', {responseType: 'arraybuffer'})

        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: ` *Do you love me* 😘 `,quoted: message.data})
}));


