let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'A quien piensas habilitar?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta alguien'
    let users = global.DATABASE._data.users
    users[who].banned = false
    conn.reply(m.chat, `Usuario habilitado`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.rowner = true
handler.group = true

module.exports = handler
