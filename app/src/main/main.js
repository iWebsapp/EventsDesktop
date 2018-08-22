'use strict'

import fs from 'fs'
import path from 'path'
const { remote } = require('electron')
const app = require('electron').remote
const dialog = app.dialog

window.addEventListener('load', () => {
  logout()
})


function logout(){
  document.getElementById('btnLogout').addEventListener('click', function(){

    const BrowserWindow = remote.BrowserWindow
    const winchild = new BrowserWindow({
      width: 1200,
      height: 700,
      maximizable: true,
      frame: true,
      show: false
    })

    winchild.once('ready-to-show', () => {
      winchild.show()
      winchild.focus()
    })

    winchild.loadURL(`file://${path.join(__dirname, '..')}/main/index.html`)

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
