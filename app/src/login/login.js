'use strict'

import fs from 'fs'
//const { BrowserWindow } = require('electron')
const app = require('electron').remote;
const dialog = app.dialog;

window.addEventListener('load', () => {
  selectFiles()
})


function selectFiles(){
  document.getElementById('btnLogin').addEventListener('click', function(){

    // win = new BrowserWindow({
    //   width: 800, //800 //1200
    //   height: 500, //500 //700
    //   maximizable: true,
    //   frame: true,
    //   show: false
    // })

  })
}

// function saveFile(){
//   document.getElementById('saveFile').addEventListener('click', function(){
//
//     dialog.showSaveDialog({
//       buttonLabel:'Guardar imagen',
//       filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }]
//     }, (file) => {
//       if( file == undefined ){
//         return
//       }
//       saveImages(file)
//     })
//
//   })
// }
