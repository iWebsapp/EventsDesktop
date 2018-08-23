'use strict'

import fs from 'fs'
import path from 'path'
const { remote } = require('electron')
const app = require('electron').remote
const dialog = app.dialog
var BrowserWindow = ''
var loginchild = ''

window.addEventListener('load', () => {
  login()
})


function login(){
  document.getElementById('btnLogin').addEventListener('click', function(){

    BrowserWindow = remote.BrowserWindow
    loginchild = new BrowserWindow({
      width: 1200,
      height: 700,
      maximizable: true,
      frame: true,
      show: false
    })

    loginchild.once('ready-to-show', () => {
      loginchild.show()
      loginchild.focus()
    })

    loginchild.loadURL(`file://${path.join(__dirname, '..')}/main/index.html`)

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
