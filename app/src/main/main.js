'use strict'

import fs from 'fs'
import path from 'path'
const { remote } = require('electron')
const app = require('electron').remote
const dialog = app.dialog

window.addEventListener('load', () => {
  //logout()
})


function logout(){
  document.getElementById('btnLogout').addEventListener('click', function(){

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
