const {
	MessageType,
    WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const { getBuffer } = require('../lib/functions')
const { color, bgcolor } = require('../lib/color')
let setting = JSON.parse(fs.readFileSync('./setting.json'))
prefix = setting.prefix

module.exports = welcome = async (whatsden, anu) => {
	    if (!welkom.includes(anu.jid)) return
		try {
           const mdata = await whatsden.groupMetadata(anu.jid)
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await whatsden.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await whatsden.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg'
            }
            hehe = await getBuffer(pp_user)
            if (anu.action == 'add' && mem.includes(whatsden.user.jid)) {
            whatsden.sendMessage(anu.jid, `hello bro I am A Bot 😎🌹 To use ${prefix}menu`, 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(whatsden.user.jid)) {
             const mdata = await whatsden.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await whatsden.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const whatsden1 = await whatsden.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const whatsden2 = whatsden1.message["ephemeralMessage"] ? whatsden1.message.ephemeralMessage : whatsden1
                let v = whatsden.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = ` *Welcome Buddy* @${num.split('@')[0]}\n\n *Read Discription*\n\n *Joined On :* ${time_welc}, ${time_wel}`
                welcomeBut = [{buttonId:`${prefix}menu`,buttonText:{displayText:`WhatsDen©™`},type:1}]
                welcomeButt = { contentText: `${mdata.subject}\n`, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: whatsden2.message.locationMessage}
                whatsden.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(whatsden.user.jid)) {
                const mdata = await whatsden.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const whatsden3 = await whatsden.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const whatsden4 = whatsden3.message["ephemeralMessage"] ? whatsden3.message.ephemeralMessage : whatsden3
                let w = whatsden.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = ` *By Bro* @${num.split('@')[0]}\n\n *Lefted On :* ${time_welc}, ${time_wel}`
                goodbyeBut = [{buttonId:`${prefix}h`,buttonText:{displayText:`WhatsDen©™`},type:1}]
                goodbyeButt = { contentText: `${mdata.subject}\n`, footerText: `${out}`, buttons: goodbyeBut, headerType: 6, locationMessage: whatsden3.message.locationMessage}
                whatsden.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
             }