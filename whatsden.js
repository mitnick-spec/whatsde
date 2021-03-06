const {
    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const brainly = require('brainly-scraper')
const translate = require("@vitalets/google-translate-api");
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const Math_js = require('mathjs')
const FormData = require('form-data')
const imgbb = require('imgbb-uploader')
const ig = require('insta-fetcher')
const phoneNum = require('awesome-phonenumber')
const _gis = require('g-i-s')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const crypto = require('crypto')
const { promisify, util } = require('util')
const qrcodes = require('qrcode');
const qrkode = require("qrcode")
const googleIt = require('google-it')
const os = require('os');
const hx = require('hxz-api')

const { menu, rules1 } = require('./message/help.js')
const { getBuffer, getGroupAdmins, generateMessageID, getRandom, runtime, pickRandom, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { lirikLagu} = require('./lib/lirik.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { webp2mp4File } = require('./lib/webp2mp4')
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const toHur = require('@develoka/angka-terbilang-js')
const ph = require('./lib/photooxy.js')
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { isAfk, cekafk, addafk } = require('./lib/offline')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const client = new WAConnection()

hit_today = []
banChats = true
offline = false


let fakeimage = fs.readFileSync("./ds.jpg")
let setting = JSON.parse(fs.readFileSync('./setting.json'))


prefix = setting.prefix
owner = setting.owner
lolkey = setting.lolkey
fake = '????????????????????????????????   ??????  ??????  ?????? ????'
waktu = '-'
alasan = '-'
antitags = false
bugc = true
antitrol = false
autorespon = false
linkcom = ".com"
linkid = ".id"
linkxyz = ".xyz"
linkly = ".ly"
linkhttp = "http"
linkwa = "://chat.whatsapp.com"
deflt = "https://" 
linknye = `${deflt}`
zeksKey = "Z2LOeYmguFB1v7DLVrx7SqcSTOW"
HunterApi = 'Ikyy69'
YuzApi = 'Yuzzu'
apiUrl = "https://api.zeks.me"
pack = 'Denis'
author = '????'

const Exif = require('./lib/exif')
const exif = new Exif()

// Database
const _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const videonye = JSON.parse(fs.readFileSync('./database/video.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const tagall = JSON.parse(fs.readFileSync('./database/tagall.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}

module.exports = whatsden = async (whatsden, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
        if (bugc === false) return
        if (mek.key.fromMe) return
        nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `?? Denis Dx 2021${longkapnye} *BUGGC DETECTED*\n@???${nums.split('@')[0]} *will be kicked*\n\n_Clear chat by Denis_\n*Dont play bug tod*`
        whatsden.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        whatsden.sendMessage(mek.key.remoteJid, '*WOW BUGS*', MessageType.text)
        whatsden.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
		global.blocked
		m = simple.smsg(whatsden, mek)
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment().tz('Asia/Kolkata').format('HH:mm:ss')
		const wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]       
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
        const c = args.join(' ')
        const botNumber = whatsden.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? whatsden.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const totalchat = await whatsden.chats.all()
		isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
	    const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
		const groupMetadata = isGroup ? await whatsden.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? whatsden.user.jid : whatsden.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? whatsden.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		const dfrply = fs.readFileSync('./ds.jpg')
        const isOwner = ownerNumber.includes(sender)
        const isKickArea = isGroup ? kickarea.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isAntitagall = isGroup ? tagall.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAuto = isGroup ? autosticker.includes(from) : false
        const atibot = m.isBaileys

        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
       
		const catl = (teks) => {
             res = whatsden.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 400, "message": teks, "footerText": "*Denis Ser*", "thumbnail": dfrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             whatsden.relayWAMessage(res)
        }
       const catlo = (teks) => {
             res = whatsden.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 70000, "message": teks, "footerText": "Made With Denis", thumbnail: fs.readFileSync('./ds.jpg'), "surface": 'CATALOG' }}, {quoted:mek})
             whatsden.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = whatsden.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `whatsden Family`, "footerText": "*Denis Ser*", "jpegThumbnail": dfrply, "caption": teks}}, {quoted:fvideo})
            whatsden.relayWAMessage(grup)
        }
        try {
		pporang = await whatsden.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const denis = await getBuffer(pporang)

        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      whatsden.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: false}})
        }
        const sendMess = (hehe, teks) => {
           whatsden.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? whatsden.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./ds.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : whatsden.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./ds.jpg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           whatsden.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return whatsden.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./ds.jpg')})
        }
        
        const fakestatus = (teks) => {
            return whatsden.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./ds.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            return whatsden.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./ds.jpg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            return whatsden.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./ds.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
      const fgclink = (teks) => {
            whatsden.sendMessage(from, teks, text, {
                quoted: {
	                key: {
		               fromMe: true,
		                participant: "0@s.whatsapp.net",
		                  remoteJid: "0@s.whatsapp.net"
	               },
	              message: {
		               "groupInviteMessage": {
			               "groupJid": "6288213840883-1616169743@g.us",
			               "inviteCode": "mememteeeekkeke",
			               "groupName": ".bot", 
                           "caption": `???????????? ???????????????????????????????? : \n ???????????? ???????????????????????????? ???????????????????? \n ???????????????? ???????? ????????????????????`, 
                           'jpegThumbnail': fs.readFileSync(`ds.jpg`)
		                }
	               }
             }
       })
    }
    // TEXT WITH THUMBNAIL
const ftex = {
	       key: { 
           fromMe: false,
	       participant: `0@s.whatsapp.net`, ...(from ? 
	       { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
            },
	        message: { 
		    "extendedTextMessage": {
            "text": `hello bro ${pushname}`,
            "title": `${pushname}`,
             'jpegThumbnail': dfrply
              }
	          } 
              }
       const fakeitem = (teks) => {
                  whatsden.sendMessage(from, teks, text, {
                  quoted: {
                  key:{
        	      fromMe:false,
                  participant:`0@s.whatsapp.net`, ...(from ? {
                  remoteJid :"status@broadcast" }: {})
                  },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`ds.jpg`),"itemCount":2021,"status":"INQUIRY","surface":"CATALOG","message":`${fake}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
                    //WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Good Night ????"; break;
                case 1: jamss = "Good Night ????"; break;
                case 2: jamss = "Good Night ????"; break;
                case 3: jamss = "Good Night ????"; break;
                case 4: jamss = "Good Night ????"; break;
                case 5: jamss = "Good Night ????"; break;
                case 6: jamss = "Good Morning ????"; break;
                case 7: jamss = "Good Morning ????"; break;
                case 8: jamss = "Good Morning ????"; break;
                case 9: jamss = "Good Morning ????"; break;
                case 10: jamss = "Good Morning ????"; break;
                case 11: jamss = "Good Afternoon ????"; break;
                case 12: jamss = "Good Afternoon ????"; break;
                case 13: jamss = "Good Afternoon ????"; break;
                case 14: jamss = "Good Afternoon ????"; break;
                case 15: jamss = "Good Afternoon ????"; break;
                case 16: jamss = "Good Afternoon ????"; break;
                case 17: jamss = "Good Evening ????"; break;
                case 18: jamss = "Good Evening ????"; break;
                case 19: jamss = "Good Evening ????"; break;
                case 20: jamss = "Good Night ????"; break;
                case 21: jamss = "Good Night ????"; break;
                case 22: jamss = "Good Night ????"; break;
                case 23: jamss = "Good Night ????"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmo = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
            const jmn = moment.tz('Asia/Kolkata').format('hh:mm')
				let d = new Date
				let locale = 'en'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		///Button Location
/*const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await whatsden.prepareMessage(from, kma, location)
/*const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
/}
whatsden.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
/}*/

        //FAKEREPLY PRODUCT
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./ds.jpg`)},"title": `???? ${fake} ????`,"description": "hehe", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "X - Dev Team","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${fake}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Its Me Denis Ser\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": true}}}
            //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "359996400","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `???? ${fake} ????`,"title": `Hmm`,'jpegThumbnail': denis}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "0@s.whatsapp.net" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
            //FAKEREPLY TROLI
            const ftroli = {
                  key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "orderMessage": { "itemCount" : '2021', "status": '1', "surface": '1', "message": `???? ${fake} ????`, "orderTitle": 'Bang', "thumbnail": denis, "sellerJid": '0@s.whatsapp.net'}}}
            //FAKEREPLY VIDEO
            const fvideo = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) },message: { "videoMessage": { "title":"fake","h": `Hmm`,'seconds': '359996400', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./life.jpg')}}}
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `???? ${fake} ????`,'jpegThumbnail': fs.readFileSync('./ds.jpg')}}} 
            //FAKEREPLY VIEWONCEIMG
            const fonceimg = {
key: {
fromMe: false,
  participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "status@broadcast" } : {}) },
  message: {
imageMessage: {
  jpegThumbnail: dfrply,
  viewOnce: true
},
},
}
 //FAKEREPLY VIEWONCEVIDEO
const foncevid = { 
key: {fromMe: false, remoteJid: "status@broadca", participant: '0@s.whatsapp.net'}, 
message: { 
videoMessage: { 
jpegThumbnail: dfrply, 
viewOnce: true
},
},
}
            
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:mADE With Denis\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./ds.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       whatsden.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await whatsden.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = whatsden.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await whatsden.groupRemove(from, [i])
        } else {
           await whatsden.sendMessage(id, "Not Premited!", "conversation")
        }
    }
}
// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					whatsden.sendMessage(from, result, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})}, message: { orderMessage: { itemCount: 2021, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `${pushname}`, orderTitle: `${pushname}`, sellerJid: '0@s.whatsapp.net'}}}})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					whatsden.sendMessage(from, result, audio, { quoted: ftext, mimetype: 'audio/mp4', duration: 1, ptt: true, contextInfo: { forwardingScore: 0, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					whatsden.sendMessage(from, result, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 500, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `${fake}`, orderTitle: `MADE BY DENIS`, sellerJid: '0@s.whatsapp.net'}}}})
					}
			}
			for (let anje of videonye){
				if (budy === anje){
					result = fs.readFileSync(`./media/video/${anje}.mp4`)
					whatsden.sendMessage(from, result, video, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}, mimetype: 'video/mp4' })
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
			}
		for (let wee of antilink){
				if (budy === wee){
				if (!isAntilink) return
					var kict = `${sender.split("@")[0]}@s.whatsapp.net`
                    reply('????????? ???????????????????????? ?????? ???????...')
                    whatsden.groupRemove(from, [kict]).catch((e) => { reply(mess.Badmin) })
					
					}
			}
       const add = function(from, orangnya){
	       whatsden.groupAdd(from, orangnya)
}
      const sendBug = async(target, teks) => {
           if (!teks) teks = '.'
           await whatsden.relayWAMessage(whatsden.
           prepareMessageFromContent(target, whatsden.
           prepareDisappearingMessageSettingContent(0),
           {}),{waitForAck:true})
           whatsden.sendMessage(target, teks, 'conversation')
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       whatsden.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await whatsden.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       whatsden.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('ds.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('finished');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           whatsden.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           whatsden.sendMessage(to, media, type, {quoted: mek, "externalAdReply": { "title": `${' '}S?????s???????????? Y??? : DS MODS${''}${''}`, "body": `G??????????? Ass??s??????????? B??????`, "previewType": 'PHOTO', "thumbnailUrl": `${''}`, "thumbnail": denis, "sourceUrl": `${''}`}, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
            const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('succes');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        whatsden.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }

            // ANTI LINK ( MyMans APIs )
if (budy.includes(linknye)) {
if (!mek.key.fromMe){
if (!isGroup) return reply(mess.group)
if (!ha) return
if (isGroupAdmins) return reply(mess.admin)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply('????????? ???????????????????????? ?????? ???????...')
whatsden.groupRemove(from, [kic]).catch((e) => { reply(mess.Badmin) })
}
}
if (budy.includes('andi')) {
if (!mek.key.fromMe){
if (!isGroup) return reply(mess.group)
if (!isKickArea) return
if (isGroupAdmins) return reply(mess.admin)
var kico = `${sender.split("@")[0]}@s.whatsapp.net`
reply('??????????????????? ??????????????????...')
whatsden.groupRemove(from, [kico]).catch((e) => { reply(mess.Badmin) })
}
}
// ANTITROLLI
if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply('*??????????? ???s??? ???????????????s*\n\n' + require('util').format(m.key))
await whatsden.modifyChat(m.chat, 'clear', {
includeStarred: false
})
}
 if (!isGroup && !isCmd && !command && !mek.key.fromMe) {
 	autorespon = false
numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=${numd.data.country_code}`)
                     sami = simi.success
                        whatsden.sendMessage(from, `${sami}`, text, {thumbnail: dfrply, sendEphemeral: true, quoted:mek, contextInfo : {forwardingScore: 44, isForwarded: true}})
                      }
      //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            whatsden.sendMessage(mek.key.remoteJid,`@${owner} *Currently Offline!*\n\n*Reason :* *${alasan}*\n*Since :* *${heheh.hours} 'O'clock*, *${heheh.minutes}* *Minute*, *${heheh.seconds} Seconds ago*\n\n*Please contact again later...*`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        whatsden.sendMessage(mek.key.remoteJid,`@${owner} *Currently Offline!*\n\n*Reason :* *${alasan}*\n*Since :* *${heheh.hours} 'O'clock*, *${heheh.minutes}* *Minute*, *${heheh.seconds} Seconds ago*\n\n*Please contact again later*`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./ds.jpg')}}}})
          }
        }
            }
          }
        }
      }
    }
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       whatsden.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       whatsden.sendMessage(from, hasil, type, options).catch(e => {
	       whatsden.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('*???????????? ??????????????? ?????? ???????????????????????????? ??????????????..*')
	       console.log(e)
})
})
})
})
}
          let authorname = whatsden.contacts[from] != undefined ? whatsden.contacts[from].vname || whatsden.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'Denis'; if (!author) author = 'Done';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
       function formatDate(n, locale = 'id') {
       let d = new Date(n)
       return d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
    })
    }
   
       const sotoy = [
        '???? : ???? : ????',
        '???? : ???? : ????',
        '???? : ???? : ????',
        '???? : ???? : ????', //ANKER
        '???? : ???? : ????',
        '???? : ???? : ????',
        '???? : ???? : ????',        
        '???? : ???? : ????',
        '???? : ???? : ????',
        '???? : ???? : ????',
        '???? : ???? : ????',
        '???? : ???? : ????',
        '???? : ???? : ????',
        '???? : ???? : ????',
        '???? : ???? : ???? Win????',
        '???? : ???? : ????',
        '???? : ???? : ????', 
        '???? : ???? : ????',
        '???? : ???? : ???? Win????'
        ]
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedGif = type === 'extendedTextMessage' && content.includes('gifMessage')
         if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		 if (!mek.key.fromMe && banChats === true) return
         if (atibot === true) return
 
         
         // CMD
        if (isCmd && !isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
 

            if (!mek.key.fromMe && banChats === true) return
            switch(command){
            	
            
    
    case 'owner':
             ini_ownerNumber = []
             let ini_list = []
		     for (let i of ini_ownerNumber) {
			 const vname_ = whatsden.contacts[i] != undefined ? whatsden.contacts[i].vname || whatsden.contacts[i].notify : undefined
		     ini_list.push({
			 "displayName": 'Owner whatsden',
			 "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${whatsden.user.name}`}\nORG: Denis Ser;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Enter your number\nEND:VCARD`
			 })
			 }
			 hehe = await whatsden.sendMessage(from, {
			 "displayName": `${ini_list.length} kontak`,
			 "contacts": ini_list 
			 }, 'contactsArrayMessage', {quoted:mek})
		     break
        
        case 'sc':
        case 'git':
		case 'sourcecode':
		sc1= await whatsden.prepareMessage(from, dfrply, location, {thumbnail: dfrply})
        sc2 = sc1.message["ephemeralMessage"] ? sc1.message.ephemeralMessage : sc1
		sc = `*??????????????? s????????* @${sender.split("@")[0]}`
        scbutton = [{buttonId:`${prefix}alive`,buttonText:{displayText:'????????????? ?'},type:1}]
        scmessage = { contentText: `${sc}`, footerText: `*????????????????????????????????   ??????  ??????  ?????? ????*`, buttons: scbutton, headerType: 6, locationMessage: sc2.message.locationMessage}
        whatsden.sendMessage(from, scmessage, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [sender]},})
		break
    
 case 'menu':
 whatsden1 = await whatsden.prepareMessage("0@s.whatsapp.net", dfrply, MessageType.location,{ thumbnail: dfrply})
 whatsden2 = whatsden1.message["ephemeralMessage"] ? whatsden1.message.ephemeralMessage : whatsden1
 button = [{buttonId:`${prefix}owner`,buttonText:{displayText:'??????????s'},type:1}]
 buttonsMessage = { contentText: menu(prefix), footerText: `*????????????????????????????????   ??????  ??????  ?????? ????*`, buttons: button, headerType: 6, locationMessage: whatsden2.message.locationMessage}
 whatsden.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
 break
   
 case 'rules':
 whatsden1 = await whatsden.prepareMessage("0@s.whatsapp.net", dfrply, MessageType.location,{ thumbnail: dfrply})
 whatsden2 = whatsden1.message["ephemeralMessage"] ? whatsden1.message.ephemeralMessage : whatsden1
 button = [{buttonId:`${prefix}menu`,buttonText:{displayText:'continue'},type:1}]
 buttonsMessage = { contentText: rules(prefix), footerText: `*????????????????????????????????   ??????  ??????  ?????? ????*`, buttons: button, headerType: 6, locationMessage: whatsden2.message.locationMessage}
 whatsden.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [sender]},})
  break
//DOWNLOAD MEDIA
   case 'play':
             if (args.length < 1) return reply('*??????????? ?????? ??????? s?????????????...?*')
             teks = args.join(' ')
             res = await yts(teks).catch(e => {
             reply('*???????? ???????? ????????? ???????s ????????????..*')
})
             result = `
*????????????? :* ${res.all[0].title}
*??????????? :* mp3
*????? :* ${res.all[0].videoId}
*????????????s???????? ????? :* ${res.all[0].ago}
*???????????s :* ${res.all[0].views}
*????????????????????? :* ${res.all[0].timestamp}
*????????????????? ??????????? :* ${res.all[0].author.name}`
              buttons = [{buttonId: `${prefix}ytmp3 ${res.all[0].url}`,buttonText:{displayText: `??????????????`},type:1},{buttonId:`${prefix}ytmp4 ${res.all[0].url}`,buttonText:{displayText:`??????????????`},type:1},{buttonId:`${prefix}doc ${res.all[0].url}`,buttonText:{displayText:`??????? ???????????????`},type:1}]
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res.all[0].image))
              yt1 = await whatsden.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), location, {thumbnail: fs.readFileSync(`./ytmp.jpeg`),})
              yt2 = yt1.message["ephemeralMessage"] ? yt1.message.ephemeralMessage : yt1
              buttonsMessage = {footerText:`????????????????????????????????   ??????  ??????  ?????? ????\n ???????????????????????? ????????????`,
              contentText:`${result}`,buttons,headerType:6, locationMessage: yt2.message.locationMessage}
              prep = await whatsden.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              whatsden.relayWAMessage(prep)
              fs.unlinkSync(`./ytmp.jpeg`)
              break
  case 'song':
              if (!q) return reply(mess.wrongFormat)
              try {
              res = await yts(q)
			  for (let hi of res.all) {
			  }
			  secs = []
			  res.all.splice(6, res.all.length)
              res.all.forEach((hi, i) =>{
              secs.push({
                        "rows": [
                           {
                              "title": `${hi.title}`,
							  description: "",
                              "rowId": `${prefix}ytmp3 ${hi.url}`
                           }
                           
              ], title: i+1})
			})
			let po = whatsden.prepareMessageFromContent(from, {
				  "listMessage":{
                  "title": "",
                  "description": `Matching Songs ${q}`,
                  "buttonText": "???????????s??? ?????? ??????????????????????",
                  "listType": 1,
                  "sections": secs}}, {quoted: mek}) 
            whatsden.relayWAMessage(po, {waitForAck: true})	
              
              } catch (e) {
               console.log(e)
               reply(`${e}`)               
             }       
       break

case 'ytsearch':
			if (args.length < 1) return reply('????????????? ???????? s????????????? ???????????..')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await whatsden.sendMessage(from, '????????????!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '??? *YOUTUBE SEARCH* ???'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '??? ?????????????: ' + video.title + '\n'
            ytresult += '??? ?????????: ' + video.url + '\n'
            ytresult += '??? ?????????????????????: ' + video.timestamp + '\n'
            ytresult += '??? ?????????????????: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '??? *W????????sD??????????*'
    		await fakethumb(tbuff,ytresult)
			break
case 'ytmp3':
              if (args.length < 1) return reply('*????????????? ??s ?????????...*')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
              break
case 'ytmp4':
case 'video':
              if (args.length < 1) return reply('????????????? ??s ?????????....')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateV(teks)
              sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
              break
case 'ytdesc':
             if (args.length < 1) return reply('*?????????? ?????? ??????????????????? ???????...*')
             teks = args.join(' ')
             res = await yts(teks)
             reply(res.all[0].description)
             break
case 'doc':
              if (args.length < 1) return reply('*?????????? ?????? ??????????????????? ???????...*')
              if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await y2mateA(teks)
              sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
              break
 
case 'igstalk':
            if (!q) return fakegroup('*???s????????????????..?*')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
            case 'insta':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return reply('*????????????? ??s ?????????..?*')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    whatsden.sendMessage(from,link,video,{quoted: mek, thumbnail: link,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    whatsden.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
        case 'igstory': 
            if(!q) return reply('*???s????????????????..?*')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    whatsden.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    whatsden.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
case 'pinterest':
                if (args.length < 1) return reply(`?????? ???s??? ${prefix}pinterest Demon slayer`)
                data = await fetchJson(`https://lolhuman.herokuapp.com/api/pinterest?apikey=${lolkey}&query=${q}`)
                fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result))
                whatsden1 = await whatsden.prepareMessage("0@s.whatsapp.net", fs.readFileSync(`./${sender}.jpeg`), MessageType.image,{ thumbnail: fs.readFileSync(`./${sender}.jpeg`)})
                whatsden2 = whatsden1.message["ephemeralMessage"] ? whatsden1.message.ephemeralMessage : whatsden1
                button = [{buttonId:`${prefix + command} ${q}`,buttonText:{displayText:'next'},type:1}]
                buttonsMessage = { contentText: `${q}`, footerText: `*????????????????????????????????   ??????  ??????  ?????? ????*`, buttons: button, headerType: 4, imageMessage: whatsden2.message.imageMessage}
                whatsden.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
                break
case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            whatsden.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break

//STICKER MAKER AND USER

       case 'addcmd': 
       case 'setcmd':
              if (isQuotedSticker) {
              if (!q) return reply(`?????? ???s??? : ${command} cmd and tag sticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("???????????!")
              } else {
              reply('*???????????? s????????????????...*')
              }
              break
       case 'delcmd':
              if (!isQuotedSticker) return reply(`?????? ???s??? : ${command} ??????????????? s???????????????? ???????????`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
              textImg("???????????!")
              break
       case 'listcmd':
              let teksnyee = `*??? ????s??? s???????????????? ????????? ???*`
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n??? *ID :* ${i.id}\n??? *?????????* : ${i.chats}`
              }
              mentions(teksnyee, cemde, true)
              break
     case 'telesticker': 
     case 'telestiker':
              if (!q) return reply(`???x-: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('s?????????????? '+ ini_sticker.length +' s????????????????s...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              whatsden.sendMessage(from, ini_buffer, sticker, {})
              }
              break
case 'attp':
              if (args.length == 0) return reply(`???x: ${prefix + command} whatsden`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              whatsden.sendMessage(from, buffer, sticker, { quoted: mek })
              break
       case 'sticker':
       case 'stickergif':
       case 'sgif':
       case 's':
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await whatsden.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                whatsden.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await whatsden.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            whatsden.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
case 'emoji':
			if (!q) return fakegroup('*?????????? ?????? ??????????????..*')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   		 })
    		break
     case 'exif':
                    if (!isOwner) return reply(mess.owner)
					const exifff = body.slice(6)
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('???????????..!')
				break
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('*???????????? ??? s????????????????*')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await whatsden.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `Whats\n\n\n\n\n`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `Den`
            require('./lib/fetch.js').createExif(satu, dua)
			require('./lib/fetch.js').modStick(media, whatsden, mek, from)
             break
    case 'takestick':
	case 'take':
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const ence = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const medu = await denz.downloadAndSaveMediaMessage(enc, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							whatsden.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(medu)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
    case 'photo':
    case 'toimg':
              if (!isQuotedSticker) return reply(mess.sticker)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await whatsden.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.err)
              buffer = fs.readFileSync(ran)
              whatsden.sendMessage(from, buffer, image, {quoted: mek, thumbnail:buffer, caption: 'W????????sD??????????'})
              fs.unlinkSync(ran)
})
              break
   case 'oncei':
              if (!isQuotedImage) return reply('*???????????? ??? ??????????????...*')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await whatsden.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              reply('????????????????????????? ?????? ?????????????????????? ?????????????...')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.err)
              buffer = fs.readFileSync(ran)
              whatsden.sendMessage(from, buffer, image, {viewOnce:true, caption: 'W????????sD??????????'})
              fs.unlinkSync(ran)
})
              break
   case 'oncev':
              if (!isQuotedVideo) return reply('*???????????? ??? ??????????????...*')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await whatsden.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.mp4')
              reply('????????????????????????? ?????? ?????????????????????? ??????????????...')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply(mess.err)
              buffer = fs.readFileSync(ran)
              whatsden.sendMessage(from, buffer, video, {viewOnce:true, caption: 'W????????sD??????????'})
              fs.unlinkSync(ran)
})
              break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
             encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await whatsden.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            whatsden.sendMessage(from, 'There is an error', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./lib/data.exif', out, '-o', _out])
            .on('exit', () => {
            whatsden.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await whatsden.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            whatsden.sendMessage(from, 'There is an error', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./lib/data.exif', out, '-o', _out])
            .on('exit', () => {
            whatsden.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`*s???????? ????????????? ???????? ?????????????? ???????????? ?????????? ${prefix}swm text|text*`)
            }
            break
      case 'tomp4':
      case 'mp4':
			if (!isQuotedSticker) return reply(mess.sticker)
             reply(mess.wait)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await whatsden.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('???????????? ??????? ?????????????? s????????????????..')
            }
            fs.unlinkSync(owgi)
            break

//BOT PUBLIC AND PRIVATE

case 'public':
          	if (!mek.key.fromMe && !isOwner) return reply('*???????? ????????????? ????????? ???????? ???????????????*')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
              rows = [
              {title: 's???????', description: "", rowId: `${prefix}self`}]
              section = [{title: "????????????????????????????????   ??????  ??????  ?????? ???? WhatsApp Bot", rows: rows}]
              button = {buttonText: '????????????? ?????? s???????', description: `\n*P???????????? - ????????????*`, sections: section, listType: 1}
              whatsden.sendMessage(from, button, MessageType.listMessage, {quoted: ftroli})
          	break
case 'self':
          	if (!mek.key.fromMe && !isOwner) return reply('*???????? ????????????? ????????? ???????? ???????????????*')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
              rows = [
              {title: '???????????????', description: "", rowId: `${prefix}public`}]
              section = [{title: "????????????????????????????????   ??????  ??????  ?????? ???? WhatsApp Bot", rows: rows}]
              button = {buttonText: '????????????? ?????? ???????????????', description: `\n*S??????? - M?????????*`, sections: section, listType: 1}
              whatsden.sendMessage(from, button, MessageType.listMessage, {quoted: ftroli})
          	break

//USING BROADCAST

case 'bc1':
        whatsden.updatePresence(from, Presence.composing)
	    if (!mek.key.fromMe && isOwner) return reply(mess.owner)
		if (args.length < 1) return reply('*??????????? ??????? ???????????s ?????? s????????..*')
		if (isMedia && !mek.message.imageMessage || isQuotedImage) {
		encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		buff = await whatsden.downloadMediaMessage(encmedia)
	    anu = await whatsden.chats.all()
		whatsden1 = await whatsden.prepareMessage(from, buff, location, {thumbnail: buff})
        whatsden2 = whatsden1.message["ephemeralMessage"] ? whatsden1.message.ephemeralMessage : whatsden1
		for (let _ of anu) {
 menubutton = [{buttonId:`${prefix}speed`,buttonText:{displayText: `${tampilUcapan}`},type:1}]
 menumessage = { contentText: `${body.slice(4)}`, footerText: `*????????????????????????????????   ??????  ??????  ?????? ????*`, buttons: menubutton, headerType: 6, locationMessage: whatsden2.message.locationMessage}
 whatsden.sendMessage(_.jid, menumessage, MessageType.buttonsMessage)
 }
 }
 case 'bc2':
 if (args.length < 1) return reply('*??????????? ??????? ???????????s ?????? s????????...*')
 if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
		encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		buff = await whatsden.downloadMediaMessage(encmedia)
	    anu = await whatsden.chats.all()
		whatsden1 = await whatsden.prepareMessage(from, buff, video, {thumbnail: buff})
        whatsden2 = whatsden1.message["ephemeralMessage"] ? whatsden1.message.ephemeralMessage : whatsden1
		for (let _ of anu) {
 menubutton = [{buttonId:`${prefix}speed`,buttonText:{displayText: `${tampilUcapan}`},type:1}]
 menumessage = { contentText: `${body.slice(4)}`, footerText: `*????????????????????????????????   ??????  ??????  ?????? ????*`, buttons: menubutton, headerType: 5, videoMessage: whatsden2.message.videoMessage}
 whatsden.sendMessage(_.jid, menumessage, MessageType.buttonsMessage)
 }
 }
        break
case 'bc':
if (args.length < 1) return reply('*??????????? ??????? ???????????s ?????? s????????...*')
					anu = await whatsden.chats.all()
 if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
					encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await whatsden.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					whatsden.sendMessage(_.jid, buff, video, {quoted: ftroli, thumbnail: buff, caption: `${body.slice(4)}`})
					}
					}
					reply(`*???????????????????????????????????? ????????????????????????* ${body.slice(4)}`)
					break
case 'bc3':
 if (args.length < 1) return reply('*??????????? ??????? ???????????s ?????? s????????...*')
 if (isMedia && !mek.message.imageMessage || isQuotedImage) {
		encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		buff = await whatsden.downloadMediaMessage(encmedia)
	    anu = await whatsden.chats.all()
		whatsden1 = await whatsden.prepareMessage(from, buff, image, {thumbnail: buff})
        whatsden2 = whatsden1.message["ephemeralMessage"] ? whatsden1.message.ephemeralMessage : whatsden1
		for (let _ of anu) {
 menubutton = [{buttonId:`${prefix}speed`,buttonText:{displayText: `${tampilUcapan}`},type:1}]
 menumessage = { contentText: `${body.slice(4)}`, footerText: `*????????????????????????????????   ??????  ??????  ?????? ????*`, buttons: menubutton, headerType: 4, imageMessage: whatsden2.message.imageMessage}
 whatsden.sendMessage(_.jid, menumessage, MessageType.buttonsMessage)
 }
 }
        break
   case 'tobc':
					whatsden.updatePresence(from, Presence.composing)
					if (!isOwner) return reply(mess.owner)
					anu = await whatsden.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
					 encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await whatsden.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					whatsden.sendMessage(_.jid, buff, audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})}, message: { orderMessage: { itemCount: 0, status: 0, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `${body.slice(5)}`, orderTitle: `hm`, sellerJid: '0@s.whatsapp.net'}}}, mimetype: 'audio/mp4', ptt: true, contextInfo: { forwardingScore: 4, isForwarded: true}})
					}
					} else if (isMedia && !mek.message.stickerMessage || isQuotedSticker) {
					 encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await whatsden.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					whatsden.sendMessage(_.jid, buff, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 2021, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `${body.slice(5)}`, orderTitle: `???????????????????s???`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
					} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
					 encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await whatsden.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					whatsden.sendMessage(_.jid, buff, MessageType.gif, { mimetype: 'video/mp4', contextInfo: { forwardingScore: 599, isForwarded: true}})
					}
					} else {
                    reply('*???????????? ??????? s???????????????? ???????? ??????????????...*')
				    }
					break
        case 'forward':
                    if (!isOwner) return reply(mess.owner)
					let id = ``
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
					 encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					buff = await whatsden.downloadMediaMessage(encmedia)
					for (let _ of id) {
					whatsden.sendMessage(id, buff, audio, { mimetype: 'audio/mp4', duration: '1', ptt: true, contextInfo: { forwardingScore: 4, isForwarded: true}})
					}
					}
					break
case 'forwardaudio':                 
                       let vv = args.join(' ')
	                   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo	
                   	media = await whatsden.downloadAndSaveMediaMessage(encmedia)
	                	ran = getRandom('.mp3')
	                	exec(`ffmpeg -i ${media}  ${ran}`, (err, stderr, stdout) => {
	                	fs.unlinkSync(media)
	                	if (err) return reply(mess.err)
		                hah = fs.readFileSync(ran)
	                	whatsden.sendMessage(vv, hah, audio, {mimetype: 'audio/mp4', ptt:true, sendEphemeral: true, })
	                	fs.unlinkSync(ran)
   	                 })
   	                	break
case 'jid':
  let me = `${mek.key.remoteJid}`
  reply(me)
  break
case 'q': 
if (!m.quoted) return reply('???????????? ??????? ??????ss????????..')
let qse = whatsden.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('???????? ?????????????????? ??????ss???????? ????? ???????????????????s...')
await qse.quoted.copyNForward(m.chat, true)
break
//EDITING

        case 'imut':
             case 'baby':
                   if (!isQuotedAudio) return reply(mess.audio)
				    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await whatsden.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=3/4,asetrate=44508*4/3 ${ran}`, (err, stderr, stdout) => {
				    fs.unlinkSync(media)
					if (err) return reply(mess.err)
					hah = fs.readFileSync(ran)
					whatsden.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
					fs.unlinkSync(ran)
			        })
				     break
case 'volume':
                     if (!isQuotedAudio) return reply(mess.audio)
                     encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                     media = await whatsden.downloadAndSaveMediaMessage(encmedia)
                     rname = getRandom('.mp3')
                     exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
                     fs.unlinkSync(media)
                     if (err) return reply(mess.err)
                     jadie = fs.readFileSync(rname)
                     whatsden.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
                     fs.unlinkSync(rname)
                     })
                     break
case 'slow':
                    if (!isQuotedAudio) return fgclink('???????????? ??????????????..')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await whatsden.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=43120" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply(mess.err)
					hah = fs.readFileSync(ran)
					whatsden.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					fs.unlinkSync(ran)
					 })
				    break
case 'fast':
                     if (!isQuotedAudio) return reply(mess.audio)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await whatsden.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(mess.err)
						hah = fs.readFileSync(ran)
						whatsden.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftext})
						fs.unlinkSync(ran)
					})
					break
case 'mp3':
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await whatsden.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
					fs.unlinkSync(mediad)
					if (err) return reply(mess.err)
					mhee = fs.readFileSync(ran)
					whatsden.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', quoted: mek })
					fs.unlinkSync(ran)
					})
					break
case 'gemes':
                    if (!isQuotedAudio) return reply(mess.audio)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await whatsden.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply(mess.err)
					hah = fs.readFileSync(ran)
					whatsden.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: fgc})
					fs.unlinkSync(ran)
					})
					break
            case 'reverse':
                  if (!isQuotedAudio) return reply(mess.audio)
	              encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	              mediau = await whatsden.downloadAndSaveMediaMessage(encmediau)
	              ran = getRandom('.mp3')
	              exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
                  fs.unlinkSync(mediau)
                  if (err) return reply(mess.err)
                  hah = fs.readFileSync(ran)
                  whatsden.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
                  fs.unlinkSync(ran)
	              })
                  break
case 'fastvid':
		            if (!isQuotedVideo) return fakeitem(mess.video)
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await whatsden.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            whatsden.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'slowvid':
		            if (!isQuotedVideo) return fakeitem(mess.video)
		            fakegroup(mess.wait)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await whatsden.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            whatsden.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'reversevid':
		            if (!isQuotedVideo) return fakeitem(mess.video)
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media = await whatsden.downloadAndSaveMediaMessage(encmedia)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            whatsden.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
case 'secvn':
                   if (!isQuotedAudio) return reply(mess.audio)
                    reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await whatsden.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
					whatsden.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
					fs.unlinkSync(media)
				    break
case 'secvideo':
				   if (!isQuotedVideo) return reply(mess.video)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await whatsden.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
					whatsden.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
					fs.unlinkSync(media)
				    break
case 'voice':
                   if (!isQuotedAudio) return reply(mess.audio)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await whatsden.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('*???????????????????? ???????? ???????????????????????????? ???????????????????? ???????? ????????????????????*')
					topt = fs.readFileSync(ran)
					whatsden.sendMessage(from, topt, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
					})
					break
//ANTI DETECTING SYSTEM

 case 'antidelete':
if (!isOwner && !mek.key.fromMe) return
if (args[0] === "on") {
if (antidel === true) return
antidel = true 
reply(`*??????????????????????????? ??????????????????????????*`)
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
rows = [
{title: `turn on`, description: "", rowId:`antidelete on`},
{title: `turn off`, description: "", rowId:`antidelete off`}
]
sectionsro = [{title: `${antidel ? 'is on' : 'is off'}`, rows: rows}]
 buttonro = { buttonText: '????????????? ??????????', description: `select to continue`, sections: sectionsro, listType: 1}
 whatsden.sendMessage(from, buttonro, MessageType.listMessage)
reply(`*??????????????????????????? ????????????????????????????????*`)
}
break
case 'anticall':
if (!isOwner && !mek.key.fromMe) return
if (args[0] === "on") {
if (antical === true) return
antical = true
reply('*?????????? ??????????????? ?????? ????????????? ??????????????????????????*')
} else if (args[0] === "off") {
if (antical === false) return
antical = false
reply('*?????????? ??????????????? ?????? ????????????? ??s ????????????????????????????????*')
}
break

case 'antitag':
if (!isOwner && !mek.key.fromMe) return
if (args[0] === "on") {
if (antitags === true) return
antitags = true
reply(`*?????????????????? ??s ??????????????????????????*`)
} else if (args[0] === "off") {
if (antitags === false) return
antitags = false
reply(`*?????????????????? ??s ????????????????????????????????*`)
}
break
case 'antibug':
if (!mek.key.fromMe && !isOwner) return
if (args[0] === 'on') {
if (bugc === true) return
bugc = true
antitrol = true
reply('*??????????-??????? ??s ??????????????????????????*')
} else if (args[0] === 'off') {
if (bugc === false) return
bugc = false
antitrol = false
reply('*??????????-??????? ??s ????????????????????????????????*')
}
break
case 'trollidetecter':
if (!mek.key.fromMe && !isOwner) return
if (args[0] === 'on') {
if (antitrol === true) return
antitrol = true
reply('*????????????????????????? ??????????????????????? ??s ??????????????????????????*')
} else if (args[0] === 'off') {
if (antitrol === false) return
antitrol = false
reply('*????????????????????????? ??????????????????????? ??s ????????????????????????????????*')
}
break
case 'autorespon':
      if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
      if (args.length < 1) return reply(`?????? ???s??? ${prefix}autorespon on/off`)
      if (c === 'on'){
      autorespon = false
      reply(`*?????????????????s???????? ??s ??????????????????????????*`)
      } else if (c === 'off'){
      autorespon = true
      reply(`*?????????????????s???????? ??s ????????????????????????????????*`)
      } else {
      reply(mess.error.api)
      }
       break
case 'addrespon':
			    if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
				if (args.length < 1) return reply(`?????? ???s??? ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Already there`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`??????????????? ?????s???????? ??????ss???????? ${argz[0]}`)
				break
case 'delrespon':
			    if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
				if (args.length < 1) return reply(`?????? ???s??? ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Not in the database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`???????????????????? ?????s???????? ??????ss???????? ${body.slice(11)}`)
				break
case 'welcome':
			
			if (args.length < 1) return reply(`*?????? ???s??? ${prefix}welcome on*`)
			if (args[0] === "on") {
			if (isWelkom) return reply('*???????????????????? ??????ss???????? ??s ??????????????????????????*')
			welkom.push(from)
			fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
			reply(mess.success)
			} else if (args[0] === "off") {
			if (!isWelkom) return reply('???????????????????? ??????ss???????? ??s ????????????...')
			welkom.splice(from, 1)
			fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
			reply(mess.success)
			} else {
			reply('???????????s??? ????? ????? ???????')
			}
			break

//GROUP JID SETTINGS

case 'ban':
if (!isOwner && !isGroupAdmins) return reply('*????????????? ?????????*')
if (!isBotGroupAdmins) return reply('*?? ?????? ???????? ?????????????.*')
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
whatsden.groupRemove(from, mems_ids)
} else {
whatsden.groupRemove(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
whatsden.groupRemove(from, [entah])
}
break
case 'add':
           if (!isOwner && !isGroupAdmins) return reply(mess.admin)
           if (!isBotGroupAdmins) return reply(mess.Badmin)
           if (!isGroup) return
           if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
           if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
           entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
           if (entah.length > 1) {
           var memu_ido = []
           for (let ids of entah) {
           mems_ids.push(ido)
           }
           whatsden.groupAdd(from, memu_ido)
           } else {
           whatsden.groupAdd(from, [entah[0]])
           }
           } else {
          entah = mek.message.extendedTextMessage.contextInfo.participant
          whatsden.groupAdd(from, [entah])
          }
          break
case 'promote':
if (!isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memi_idi = []
for (let ids of entah) {
memi_idi.push(idi)
}
whatsden.groupMakeAdmin(from, memi_idi)
} else {
whatsden.groupMakeAdmin(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
whatsden.groupMakeAdmin(from, [entah])
}
break
case 'demote':
      if (!isOwner && !isGroupAdmins) return reply(mess.admin)
if (!isBotGroupAdmins) return reply(mess.Badmin)
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memu_ido = []
for (let idk of entah) {
memk_idk.push(idk)
}
whatsden.groupDemoteAdmin(from, memk_idk)
} else {
whatsden.groupDemoteAdmin(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
whatsden.groupDemoteAdmin(from, [entah])
}
break
case 'searchmsg':  //by ANU TEAM
                   if (args.length < 1) return reply(`*??????????? ???????? ???????? ????????????????? ???????..?*\n*???x:-* : ${prefix + command} halo|10`)
                   teks = arg
                   if (teks.includes("|")) { 
                   try {
                   var ve = teks.split("|")[0]
                   var za = teks.split("|")[1]
                   sampai = `${za}`
                   if (isNaN(sampai)) return reply('*??????s??? ??????????? ??? ???????????????..*')
                   batas = parseInt(sampai) + 1
                   if (batas > 30) return reply('*??????x 30*')
                   reply(mess.wait)
                   cok = await whatsden.searchMessages(`${ve}`, from, batas,1) 
                   if (cok.messages.length < 2) return reply('*??????ss???????? ???????? ?????????????*') 
                   if (cok.messages.length < parseInt(batas)) reply(`*????????????? ?????????* ${cok.messages.length - 1} *??????ss????????!*`)
                  for (i=1;i < cok.messages.length;i++) {
                  if (cok.messages[i].message) {
                  whatsden.sendMessage(from, `*???????????????????!*`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
                   }
                   }
             } catch (e) {
             return reply(String(e))
             }
             } else {
             reply(`*???????? ??????????????????? ??s ???????????? ???????? ???????s ??s ????? ???x??????????? ?????? ??????????????????? ???????s.* : ${prefix + command} halo|10`)
}
             break
     case 'seenby':
             if(!isGroup) return reply(mess.group)
             try {
             infom = await whatsden.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*??? ??????????? ???? :*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY hh:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*??? ????????????????????? ?????? :*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY hh:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('*???????????? ?????? ???????? ??????ss????????..!*')
}
             break

       case 'listonline':
       case 'here':                
             if (!isGroup) return reply('???s??? ????????? ?????????????')
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(whatsden.chats.get(ido).presences), whatsden.user.jid]
             whatsden.sendMessage(from, '*???????????????? ????????????????????????:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      
case 'hidetag':
			if (!mek.key.fromMe) return fakestatus('???????s ???????????????????? ????????? ???s??? ????????.')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await whatsden.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			whatsden.sendMessage(from, optionshidetag, text)
			break
        case 'qrcode':
if (from.endsWith('@g.us')) return reply2('Cant be a bot in the group')
client.version = [2, 2119, 6]
client.browserDescription = ['Fajar Alfarizi','Desktop','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await whatsden.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : mek,caption: 'Scan this QR to become a temporary bot!\n1.  Click the three dots in the upper right corner\n2.  Tap WhatsApp Web\n3.  Scan this QR \n\nQR Expired in 20 seconds'})    
setTimeout(() => {
       whatsden.deleteMessage(from, scen.key)
  }, 30000);
})  
client.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = client.base64EncodedAuthInfo()
  fs.writeFileSync(`./session/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await client.sendMessage('0@s.whatsapp.net', `*You can login without qr with the message below*`, MessageType.extendedText)
  client.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
client.on('chat-update', async (chat) => {
	require('./whatsden.js')(client, chat)
})    
await client.connect().then(async ({user}) => {
reply('Successfully connected with your WhatsApp.\n*NOTE: This is just a ride*\n' + JSON.stringify(user, null, 2))
})
} catch {
reply('Error!  only 1 person can access the sobot feature')
}
break
case 'stopqr':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
try {
reply('Oke')
fs.unlinkSync(`./sampah/${sender}.json`)
client.close()
} catch {
reply('Oke')
client.close()
}
break
case 'spam':
if (!isOwner) return reply(mess.owner)
if (!m.quoted) return reply('???????????? ??????? ??????ss????????')
if (args.length < 1) return reply(`???x :\n${prefix}spam 15`)
if (args[0] > 100) return reply(`??????x??????????? 100`)
let jml = args[0]
for(let i=0;i<jml;i++){
m.quoted.copyNForward(m.chat, true)
}
break
case 'description':
				if (!isGroup) return reply(mess.group)
			    anu = from
			    metadete = await whatsden.groupMetadata(anu)
			    whatsden.sendMessage(from, metadete.desc, MessageType.text, {quoted:fgif})
				break

//FROM OWNER [ME]

case 'on':
            if (!isOwner) return reply(mess.owner)
            offline = false
            fakestatus('B?????? N?????? O???????????')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!isOwner) return reply(mess.owner)
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus('B?????? N?????? O?????????????')
            break   
    case 'get':
            if(!q) return reply('*?????????? ?????? ???????..*')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}s????????????: ${latensi.toFixed(4)} s??????????????*`
			fakegroup(pingnya)
			})
			break  
case 'alive':
              whatsden1 = await whatsden.prepareMessage(from, denis, image, {thumbnail: denis})
              whatsden2 = whatsden1.message["ephemeralMessage"] ? whatsden1.message.ephemeralMessage : whatsden1
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'charging' : 'not charging'}`
              uptime = process.uptime();
              timestampe = speed();
              latensie = speed() - timestampe
teks = `
*I ?????? s????????? ????????????????? ?????* ${runtime(process.uptime())}
*s???????????? : ${latensie.toFixed(4)} s??????????????*
*?????????????????? s????????????s : ${baterai}% ${charger}*
*???????? ???s???????? : ${ram2}*
`
    button = [{buttonId:`${prefix}menu`,buttonText:{displayText:'????????????? ??s ???????????..'},type:1}, {buttonId:`${prefix}owner`,buttonText:{displayText:'????????????? ??s ?????????????..'},type:1}]
 buttonMessage = { contentText: `${teks}`, footerText: `????????????????????????????????   ??????  ??????  ?????? ????`, buttons: button, headerType: 4, imageMessage: whatsden2.message.imageMessage}
 whatsden.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
      break  
case 'delete':
		whatsden.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		break
case 'join': 
             if (args.length == 0) return reply(`Ex:- ${prefix}join https://chat.whatsapp.com`)
             if (!q) return reply('*?????????? ?????? ???????????s????????? ????????????? ?????????*')
             if (!isOwner) return reply(mess.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('*???????s ????????? ??s ????????????????? ???????.*')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = whatsden.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('*?? ?????? ????????????????.*')
             break
      case 'readall':
					if (!mek.key.fromMe && isOwner) return reply(mess.owner)
					var chats = await whatsden.chats.all()
                    chats.map( async ({ jid }) => {
                          await whatsden.chatRead(jid)
                    })
					rdl = `*?????????????? ????????????????? ${chats.length} ???????????s..!*`
					await whatsden.sendMessage(from, rdl, MessageType.text, {quoted: mek})
					console.log(chats.length)
					break
case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
             if (!isOwner) return reply(mess.owner)
             reply(`???????? ????????? s??????????????????? ????????????? ?????, ????? ?????? ???????????????? ?????????? ????? ????????????????.`)
             await sleep(3000)
             process.exit()
             break
      case 'leaveall':
             if (!isOwner) return reply(mess.owner)
             let totalgroup = whatsden.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, '?? ?????? ????????????????? ??????? ????????????? ???? ???????.', null)
             await sleep(3000)
             whatsden.groupLeave(id)
}
             break
case 'leave':
              if (!isOwner) return reply(mess.owner)
              if (!isGroup) return reply(mess.group)
              setTimeout( () => {
              whatsden.groupLeave(from) 
              }, 3000)
              setTimeout( () => {
              reply('?????ss ??? ??????????s..???? ???????..')
              }, 0)
              break
case 'clearall':
                if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
                reply('???????????????????? ??????????? '  + from)
                await sleep(3000)
                whatsden.modifyChat(from, ChatModification.delete)
                break
      // Delete Private Message ( MyMans APIs )
case 'clearpm':
if (!mek.key.fromMe && !isOwner) return reply(mess.owner)
anu = await whatsden.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
for (let _ of anu) {
whatsden.modifyChat(_.jid, 'delete', {
includeStarred: false
})
}
await reply(`*????????????????????* ${anu.length} *??????????????????? ???????????.*`)
break
case 'cleargroup':
if (!mek.key.fromMe) return reply(mess.owner)
anu = await whatsden.chats.all().filter(v => v.jid.endsWith('@g.us'))
for (let _ of anu) {
whatsden.modifyChat(_.jid, 'delete', {
includeStarred: false
})
}
await reply(`*????????????????????* ${anu.length} *????????????? ???????????.*`)
break

//EXTRA FUN AND LEARN

case 'contact':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('????????????????? ????????????? ???????????????.');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            whatsden.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await whatsden.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await whatsden.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		whatsden.sendMessage(from, mat, MessageType.extendedText, anu)
            break
//STORAGE

case 'addvid':
                    if (!isOwner) return reply(mess.owner)
					if (!isQuotedVideo) return reply(mess.video)
					nm = body.slice(8)
					if (!nm) return reply('??????????? ??s ???????? ?????????????? ???????????..?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await whatsden.downloadMediaMessage(boij)
					videonye.push(`${nm}`)
					fs.writeFileSync(`./media/video/${nm}.mp4`, delb)
					fs.writeFileSync('./database/video.json', JSON.stringify(videonye))
					reply(`*V??????????? ?????????????????? ?????? ??????????????* ${prefix}listvideo`)
					break
         case 'delvideo':
                   if (!isOwner) return reply(mess.owner)
                   try {
					 nmm = body.slice(6)
					 wanu = vien.indexOf(nmm)
					 videonye.splice(wanu, 1)
					 fs.unlinkSync(`./media/video/${nmm}.mp3`)
					 whatsden.sendMessage(from, `*${nmm} ???????? ????????????????????????????*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})}, message: { orderMessage: { itemCount: 59, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: '????????????????????', orderTitle: '????????????', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
					 } catch (err){
					console.log(err)
					reply(mess.error.api)
					}
					break
        case 'listvideo':
					teks = '*L??s??? ?????????????? :*\n\n'
					for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
					}
					teks += `\n*T??????????? : ${videonye.length}*`
					secs = []
					videonye.splice(`${videonye.length}`, videonye.length)
                    videonye.forEach((awokwkwk, i) =>{
					secs.push({
                        "rows": [{"title": `delvideo ${awokwkwk}`, description: ``, "rowId": `delvideo ${awokwkwk}`}
                        ], title: i+1})
                        })
			let pv = whatsden.prepareMessageFromContent(from, {
				  "listMessage":{
                  "title": "A???????????????????? ??????????????s",
                  "description": `${teks}`,
                  "buttonText": "s?????????????? ?????? ?????????????????",
                  "listType": 1,
                  "sections": secs}}, {quoted: mek}) 
            whatsden.relayWAMessage(pv, {waitForAck: true})	
				break
      case 'addvn':
      case 'addbgm':
                    if (!isOwner) return reply(mess.owner)
					if (!isQuotedAudio) return reply(mess.audio)
					nm = body.slice(7)
					if (!nm) return reply('*??????????? ??s ???????? s??????? ???????????*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await whatsden.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					whatsden.sendMessage(from, `*s??????? ??????????????? ?????? ??????????????* ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})}, message: { orderMessage: { itemCount: 333, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `${nm}`, orderTitle: 'hehe', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
					break
    case 'addlink':
              if (!isAntilink) return
                 nm = body.slice(7)
                 if (!nm) return reply('*??????????? ???????? ?????????..*')
                 antilink.push(`${nm}`)
                 fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				 whatsden.sendMessage(from, `*????????? ???????????????* ${prefix}listlink`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})}, message: { orderMessage: { itemCount: 333, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: `${nm}`, orderTitle: 'hehe', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
				 break
     
                 
	 case 'delvn':
	                if (!isOwner) return reply(mess.owner)
					try {
					 nmm = body.slice(6)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					 whatsden.sendMessage(from, `*${nmm} ??s ????????????????????*`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})}, message: { orderMessage: { itemCount: 59, status: 200, thumbnail: fs.readFileSync('./ds.jpg'), surface: 200, message: '????????????????????', orderTitle: '????????????', sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true}})
					 } catch (err){
					console.log(err)
					reply(mess.error.api)
					}
					break
		case 'listvn':
					teks = '*L??s??? s???????s :*\n'
					for (let awokwkwk of vien) {
					teks += `${awokwkwk}\n`
					}
					teks += `\n*?????????????? :* *${vien.length}*\n\n????`
					secs = []
					vien.splice(`${vien.length}`, vien.length)
                    vien.forEach((awokwkwk, i) =>{
					secs.push({
                    "rows": [
                     {
                     "title": `delvn ${awokwkwk}`,
				    description: ``,
                     "rowId": `delvn ${awokwkwk}`
                      }
                      ], title: i+1})
                      })
			       let po = whatsden.prepareMessageFromContent(from, {
				  "listMessage":{
                  "title": "*A???????????????????? s???????s*",
                  "description": `${teks}`,
                  "buttonText": "s?????????????? ?????? ?????????????????",
                  "listType": 1,
                  "sections": secs}}, {quoted: mek}) 
                  whatsden.relayWAMessage(po, {waitForAck: true})	
                  break
   case 'addimage':
                    if (!isOwner) return reply(mess.owner)
					if (!isQuotedImage) return reply(mess.img)
					nm = body.slice(10)
					if (!nm) return reply('*W???????? ??s ???????? ????????????? ???????????..?*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await whatsden.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					whatsden.sendMessage(from, `*${nm} ????????????? ???????????????*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				    if (!isOwner) return reply(mess.owner)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 costum(from, `${nmm} ????????????? ?????s ????????????????????`, fake)
					 } catch (err){
					 console.log(err)
					reply(mess.error.api)
					}
					break
				case 'imagelist':
				case 'listimage':
					teks = '*L??s??? ????????????? :*\n\n'
					for (let awokwkwk of imagi) {
					teks += `${awokwkwk}\n`
					}
					teks += `\n*T??????????? : ${imagi.length}*`
					secs = []
					imagi.splice(`${imagi.length}`, imagi.length)
                    imagi.forEach((awokwkwk, i) =>{
						secs.push({
                        "rows": [
                           {
                              "title": `delimage ${awokwkwk}`,
							  description: ``,
                              "rowId": `delimage ${awokwkwk}`
                           }
                        ], title: i+1})
                        })
			let pp = whatsden.prepareMessageFromContent(from, {
				  "listMessage":{
                  "title": "*A???????????????????? ?????????????s*",
                  "description": `${teks}`,
                  "buttonText": "s?????????????? ?????? ?????????????????",
                  "listType": 1,
                  "sections": secs}}, {quoted: mek}) 
            whatsden.relayWAMessage(pp, {waitForAck: true})	
				break
              case 'addsticker':
                    if (!isOwner) return reply(mess.owner)
					if (!isQuotedSticker) return reply(mess.sticker)
					nm = body.slice(12)
					if (!nm) return reply('*W???????? ??s ???????? s???????????????? ???????????..?*')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await whatsden.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					whatsden.sendMessage(from, `*${nm} s???????????????? ???????????????*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				    if (!isOwner) return reply(mess.owner)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 costum(from, `${nmm} s???????????????? ????????????????????`, fake)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
            case 'liststicker':
					teks = '*L??s??? s????????????????* : \n\n'
					for (let awokwkwk of setik) {
						teks += `${awokwkwk}\n`
					}
					teks += `\n*T??????????? : ${setik.length}*`
                    secs = []
					setik.splice(`${setik.length}`, setik.length)
                    setik.forEach((awokwkwk, i) =>{
						secs.push({
                        "rows": [
                           {
                              "title": `delvn ${awokwkwk}`,
							  description: ``,
                              "rowId": `delsticker ${awokwkwk}`
                           }
                        ], title: i+1})
                        })
			let ps = whatsden.prepareMessageFromContent(from, {
				  "listMessage":{
                  "title": "*A???????????????????? s????????????????s*",
                  "description": `*${teks}`,
                  "buttonText": "s?????????????? ?????? ?????????????????",
                  "listType": 1,
                  "sections": secs}}, {quoted: mek}) 
            whatsden.relayWAMessage(ps, {waitForAck: true})	
            break
case 'time':
haha = `${jmn}`
whatsden.sendMessage(from, haha, text, {quoted:floc2})
break
case 'date':
hr = `${week}/${calender}`
whatsden.sendMessage(from, hr, text, {quoted:ftext})
break
case 'battery':
batter = `${baterai}`
whatsden.sendMessage(from, batter, text, {quoted:ftext})
break
case 'ss':
				reply(mess.wait)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`)
					break
//MAKER COMMANDS

case 'halloween':
	if (!arg) return reply(from, `*?????? ???s??? ${prefix}halloween ??????x???*`, mek)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${arg}&apikey=${HunterApi}`)
   break
   case 'vampire':
   if (!arg) return reply(from, `*?????? ???s??? ${prefix}vampire ??????x???*`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${arg}&apikey=${HunterApi}`)
   break
   case 'codetxt':
   if (!arg) return reply(from, `*?????? ???s??? ${prefix}codetxt ??????x???*`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${arg}&apikey=${HunterApi}`)
   break
case 'matrix':
				if (!arg) return reply(from, `*?????? ???s??? ${prefix}matrix ??????x???*`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${arg}&apikey=${HunterApi}`)
				break
				case 'googletxt':
				if (!arg) return reply(from, `*?????? ???s??? ${prefix}googletxt ??????x???*`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=${HunterApi}`)
				break
				case 'spiderman':
				if (!arg) return reply(from, `*?????? ???s??? ${prefix}sipderman ??????x???*`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=${HunterApi}`)
				break
				case 'express':
				if (!arg) return reply(from, `*?????? ???s??? ${prefix}express ??????x???*`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=${HunterApi}`)
				break
				case 'dance':
				if (!arg) return reply(from, `*?????? ???s??? ${prefix}dance ??????x???*`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${arg}&apikey=${HunterApi}`)
				break
				case 'blackbird':
				if (!arg) return reply(from, `*?????? ???s??? ${prefix}blackbird ??????x???*`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${arg}&apikey=${HunterApi}`)
				break
				case 'text3d':
				if (!arg) return reply(from, `*?????? ???s??? ${prefix}text3d ??????x???*`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${arg}&apikey=${HunterApi}`)
				break
				case 'warrior':
				if (!arg) return reply(from, `*?????? ???s??? ${prefix}warrior ??????x???*`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${arg}&apikey=${HunterApi}`)
				break

case 'dadu':
			random = Math.floor(Math.random() * 6) + 0
		    damdu = fs.readFileSync(`./sticker/${random}.webp`)
			whatsden.sendMessage(from, damdu, sticker, {quoted: mek})
			break

case 'translate':
				if (args.length < 1) return reply('*????????????? ??s ???????? ??????x???..?*')
				crew = body.slice(11)
                trans = crew.split("|")[0];
                late = crew.split("|")[1];
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/translate?lang=${trans}&text=${late}&apikey=${HunterApi}`, {method: 'get'})
				teks = anu.text
                reply(teks)
                break
case 'ocr': 
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				    const media = await whatsden.downloadAndSaveMediaMessage(encmedia)
					reply(mess.wait)
					await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
					.then(teks => {
					reply(teks.trim())
					fs.unlinkSync(media)
					})
					.catch(err => {
					reply(err.message)
					fs.unlinkSync(media)
					})
					} else {
						reply(`*Send Photos With Caption ${prefix}ocr*`)
					}
					break
//GAME

case 'slot':
            case 'slots':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            slotso = `[  ???? | SLOTS ]\n-----------------\n???? : ???? : ????\n${somtoy}<=====\n???? : ???? : ????\n[  ???? | SLOTS ]`
            whatsden1 = await whatsden.prepareMessage("0@s.whatsapp.net", denis, MessageType.location,{ thumbnail: denis})
            whatsden2 = whatsden1.message["ephemeralMessage"] ? whatsden1.message.ephemeralMessage : whatsden1
 button = [{buttonId:`${prefix}slot`,buttonText:{displayText:'?????x???'},type:1}]
 buttonsMessage = { contentText: `${slotso}`, footerText: `*????????????????????????????????   ??????  ??????  ?????? ????*`, buttons: button, headerType: 6, locationMessage: whatsden2.message.locationMessage}
 whatsden.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
            break
case 'suit':
          if (args.length < 1) return reply('*Select scissors/stone/paper.*')
		  if (args[0] === 'scissors' ) {
					  gunting = [
					    "You *Scissors*\nMe *Paper*\nYou Win",
					    "You *Scissors*\nMe *Rock*\nYou Lose",
					    "You *Scissors*\nMe *Scissors*\nWe draw"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'paper') {
					  ker = [
					    "You *Paper*\nMe *Rock*\nYou Win",
					    "You *Paper*\nMe *Scissors*\nYou Lose",
					    "You *Paper*\nMe *Paper*\nWe Draw"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'stone') {
					  bat = [
					    "You *Rock*\nMe *Scissors*\nYou Win",
					    "You *Rock*\nMe *Paper*\nYou Lose",
					    "You *Rock*\nMe *Rock*\nWe're Draw"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('*Choose scissors/rock/paper*')
					}
                   break

//GROUP PARTICIPENT

case 'discription':
				if (!isGroup) return reply(mess.only.group)
				anu = from
			   metadete = await whatsden.groupMetadata(anu)
			   whatsden.sendMessage(from, metadete.desc, text, {quoted:mek})
			   break
		       case 'bio':
	           var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await whatsden.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
                    case 'name':
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = whatsden.contacts[ambl] != undefined ? whatsden.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : whatsden.contacts[ambl].notify || whatsden.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
				case 'pic':
				case 'getpic':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await whatsden.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            whatsden.sendMessage(from, pict, image, {quoted: mek})
            break
case 'getcaption':
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await whatsden.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await whatsden.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				whatsden.sendMessage(from, buffer, image, {quoted: mek})
		} else {
		}
			  break

//GROUP BAN MEMBERS

case 'kick':
if (!isOwner && !isGroupAdmins) return reply('*Admin Group Only*')
if (!isBotGroupAdmins) return reply('*Bot not admin!*')
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.participant
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
whatsden.groupRemove(from, mems_ids)
} else {
whatsden.groupRemove(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
whatsden.groupRemove(from, [entah])
}
break
case 'add':
      if (!isOwner && !isGroupAdmins) return reply('*Admin Group Only*')
if (!isBotGroupAdmins) return reply('*Bot not admin!*')
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memu_ido = []
for (let ids of entah) {
mems_ids.push(ido)
}
whatsden.groupAdd(from, memu_ido)
} else {
whatsden.groupAdd(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
whatsden.groupAdd(from, [entah])
}
break
case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
case 'tag':
			if (args.length < 1) return reply(`?????? ???s??? ${prefix}tag 62xx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
				tagq = `@${nomqm.split('@')[0]}` 
				whatsden.sendMessage(from, tagq, text, { quoted: ftext, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break








default:
if (budy.startsWith('x')){
try {
return whatsden.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('=>')){
if (!isOwner) return
try {
return whatsden.sendMessage(from, 
`${a}???? Input: ${budy.slice(3)}
???? OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
${a}`
,text, {quoted:mek })
} catch(err) {
e = String(err)
reply(`${a} "err" :  "${e}"${a}`)
}
}
if (budy.startsWith(`$`)){
if (!isOwner) return
const sep = budy.split("\n")
let exc = budy.replace(sep[0]+"\n", "")
exec(exc, (err, stdout) => {
if (err) return whatsden.sendMessage(from, `root @denis:~ ${err}`, text, { quoted: mek })
if (stdout) {
whatsden.sendMessage(from, stdout, text)
}
})
}
if (budy.startsWith('>')) {
if (!isOwner) return
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('from', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
}
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}
