//
let { MessageType } = (await import('@adiwajshing/baileys')).default
import { sticker } from '../lib/sticker.js'
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Reply stiker nya!'
      stiker = await sticker(img, false, '๐', '๐ญ โข DX|RPW :\nโคท ๐๐๐ ๐ฑ๐พ๐ ๐๐๐๐๐๐๐๐')
    } else if (args[0]) stiker = await sticker(false, args[0], '๐', '๐ฎ โข Discord :\nโคท https://discord.gg/WEJQjugTY7')
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else throw 'Tag / Upload Image or Video Max 10 Sec'
  }
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = /^sticker$/i
//handler.owner = true

export default handler
