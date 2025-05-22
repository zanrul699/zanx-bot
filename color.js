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




const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
  return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const Lognyong = (text, color) => {
  return !color ? chalk.yellow('[ ! ] ') + chalk.green(text) : chalk.yellow('=> ') + chalk.keyword(color)(text)
}

module.exports = {
  color,
  bgcolor,
  Lognyong
}
