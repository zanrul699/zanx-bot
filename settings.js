/*
Script By ZanXtzyZ Official 
No Delete Credits Developer Script
=========================
//---------------------------------------------------- ]
[CONTANT DEV : 6283869487664]

[TERIMAKASIH SUDAH MEMAKAI SCRIPT INI BANG, SEMOGA PUAS YAH - BY ZANXTZYZ OFFICIAL / 2025]

[ INFORMASI SCRIPT - ZANXTZYZ ALPHA CRASH ]
[ https://whatsapp.com/channel/0029Vb3wrn87YSd73TgtLs1x ]
[ //---------------------------------------------------- ]
[ ZANXTZYZ OFFICIAL - DEVELOPER SCRIPT ]
*/

const fs = require('fs')
global.botname = ""
global.owner = ""
global.numberbot = ""
//===================================//
global.session = "session"
//=========== [ IMG-URL ] ===========//
global.thumb = "https://files.catbox.moe/qw1jip.png"
global.image = {
Reply: "https://files.catbox.moe/qw1jip.png"
}
//==================================//
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
