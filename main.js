const {
WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const clc = require('chalk')
const { sleep, start, success } = require('./lib/myfunc')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
const { getBuffer } = require('./lib/myfunc')
baterai = 'unknown'
charging = 'unknown'


require('./whatsden.js')
nocache('../whatsden.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))
require('./message/help.js')
nocache('../message/help.js', module => console.log(color('[WATCH]', 'cyan'), color(`'${module}'`, 'green'), 'File is updated!'))
         
    const starts = async (whatsden = new WAConnection()) => {
	whatsden.logger.level = 'warn'
	console.log(color(figlet.textSync('WhatsDen©™', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 82,
		whitespaceBreak: false
	}), 'red'))
	console.log(color('[BOT]', 'cyan'), color('WELCOME', 'white'))
	console.log(color('[BOT]', 'cyan'), color('Powerd By Denis', 'yellow'))
	whatsden.browserDescription = ["Bot Connected", "Netflix", "3.0.0"];

	// Menunggu QR
	whatsden.on('qr', () => {
		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Please scan qr code'))
	})

	// Menghubungkan
	fs.existsSync(`./Denis.json`) && whatsden.loadAuthInfo(`./Denis.json`)
	whatsden.on('connecting', () => {
		start('2', 'Connecting...','red')
	})

	//connect
	whatsden.on('open', () => {
		success('2', 'Connected')
	})

	// session
	await whatsden.connect({
		timeoutMs: 10 * 1000
	})
	fs.writeFileSync(`./Denis.json`, JSON.stringify(whatsden.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	whatsden.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Battery : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	whatsden.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

  
       // welcome
	whatsden.on('group-participants-update', async (anu) => {
		await welcome(whatsden, anu)
		try { 
           const mdata = await whatsden.groupMetadata(anu.jid)
           console.log(anu)
		if (anu.action == 'promote'){
			num = anu.participants[0]
			try {
					ppimg = await whatsden.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			const whatsden1 = await whatsden.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			const whatsden2 = whatsden1.message["ephemeralMessage"] ? whatsden1.message.ephemeralMessage : whatsden1
			teks = `*ʏᴏᴜ ɴᴏᴡ ᴀ ʜᴇᴋᴇʀ* @${num.split('@')[0]}`
			promoteBut = [{buttonId:`hm`,buttonText:{displayText:'🤭'},type:1}]
            promoteButt = { contentText: `${teks}`, footerText: `ᴡʜᴀᴛsᴅᴇɴ`, buttons: promoteBut, headerType: 6, locationMessage: whatsden2.message.locationMessage}
            whatsden.sendMessage(mdata.id, promoteButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
		    } else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await whatsden.groupMetadata(anu.jid)
			try {
					ppimg = await whatsden.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			const whatsden3= await whatsden.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			const whatsden4 = whatsden3.message["ephemeralMessage"] ? whatsden3.message.ephemeralMessage : whatsden3
			teks = `*ʏᴏᴜ ɴᴏ ᴀ ʜᴇᴋᴇʀ* @${num.split('@')[0]}
`
			demoteBut = [{buttonId:`hm`,buttonText:{displayText:'😲'},type:1}]
            demoteButt = { contentText: `${teks}`, footerText: `𝘗𝘰𝘸𝘦𝘳𝘥 𝘉𝘺 𝘞𝘩𝘢𝘵𝘴𝘋𝘦𝘯©™`, buttons: demoteBut, headerType: 6, locationMessage: whatsden4.message.locationMessage}
            whatsden.sendMessage(mdata.id, demoteButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
             }
            } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})

    whatsden.on('group-update', async (anu) => {
    falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net",
   remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "Alphabot", "caption": `🌹 𝑫 𝑬 𝑵 𝑰 𝑺 - 𝑺 𝑬 𝑹 🌹`, 'jpegThumbnail': fs.readFileSync(`ds.jpg`)}}}
    metdata = await whatsden.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `*[ Gʀᴏᴜᴘ Oᴘᴇɴᴇᴅ ]*\n`
    whatsden.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Opened ] In ${metdata.subject}`))
  } else if(anu.announce == 'true'){
    teks = `*[ Gʀᴏᴜᴘ Cʟᴏsᴇᴅ ]*\n`
    whatsden.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Closed ] In ${metdata.subject}`))
  } else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `*[ Gʀᴏᴜᴘ Dɪsᴄʀɪᴘᴛɪᴏɴ Cʜᴀɴɢᴇ ]*\n\n • *ɴᴇᴡ* : ${anu.desc}`
    whatsden.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: falfa})
    console.log(clc.yellow(`[ Group Description Change ] In ${metdata.subject}`))
 } else if(anu.restrict == 'false'){
    teks = `*[ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢs Cʜᴀɴɢᴇ ]*\n`
    whatsden.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
  } else if(anu.restrict == 'true'){
    teks = `*[ Gʀᴏᴜᴘ Sᴇᴛᴛɪɴɢ Cʜᴀɴɢᴇ ]*\n`
    whatsden.sendMessage(metdata.id, teks, MessageType.text, {quoted: falfa})
    console.log(clc.yellow(`[ Group Setting Change ] In ${metdata.subject}`))
   }
})

    
	whatsden.on('chat-update', async (message) => {
		require('./whatsden.js')(whatsden, message)
	})
	antidel = false
whatsden.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Kolkata').format('hh:mm:ss')
let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
whatsden.sendMessage(m.key.remoteJid, `
               *「 ᴀɴᴛɪ-ᴅᴇʟᴇᴛᴇ」*
*༄ Nᴀᴍᴇ :* @${m.participant.split("@")[0]}
*༄ Tɪᴍᴇ :* ${jam} ${week} ${calender}
*༄ Tʏᴘᴇ :* ${type}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

whatsden.copyNForward(m.key.remoteJid, m.message)
})
antical = false
whatsden.on('CB:action,,call', async json => {
	    if (antical === false) return
        const callerId = json[2][0][1].from;
        console.log("caller "+ callerId)
        whatsden.sendMessage(callerId, "*Call = BLOCK!!*\n*Dont call me!!*", MessageType.text)
        await sleep(3000)
        await whatsden.blockUser(callerId, "add") // Block user
   })
}

starts()