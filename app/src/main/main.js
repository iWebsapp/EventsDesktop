'use strict'

import fs from 'fs'
import path from 'path'
const { remote } = require('electron')
const app = require('electron').remote
const dialog = app.dialog
var BrowserWindow = ''
var mainchild = ''

window.addEventListener('load', () => {
  logout()
})

function logout(){
  document.getElementById('btnLogout').addEventListener('click', function(){

    const currentWin = remote.getCurrentWindow()
    BrowserWindow = remote.BrowserWindow
    mainchild = new BrowserWindow({
      width: 770,
      height: 500,
      maximizable: true,
      show: false
    })

    mainchild.once('ready-to-show', () => {
      currentWin.hide()
      mainchild.show()
      mainchild.focus()
    })

    mainchild.loadURL(`file://${path.join(__dirname, '..')}/login/index.html`)

  })
}

// function saveFile(){
//   document.getElementById('saveFile').addEventListener('click', function(){
//
      // dialog.showSaveDialog({
      //   buttonLabel:'Guardar imagen',
      //   filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }]
      // }, (file) => {
      //   if( file == undefined ){
      //     return
      //   }
      //   saveImages(file)
      // })
//
//   })
// }
