'use strict'

const { app, BrowserWindow } = require('electron')
const devTools = require('./devtools')
const handleErrors = require('./handle-errors')
const { remote } = require('electron')
var win = ''

if (process.env.NODE_ENV === 'development') {
  devTools()
}

app.on('before-quit', () => {
  console.log('before-quit')
})

app.on('window-all-closed', () => {
  app.quit()
})

function closeWin(win){
  win.hide()
}

app.on('ready', () => {

  win = new BrowserWindow({
    width: 770,
    height: 500,
    maximizable: true,
    show: false
  })

  handleErrors(win)

  win.once('ready-to-show', () => {
    win.show()
  })

  win.on('hide', () => {
    win.hide()
  })

  win.on('show', () => {
    win.show()
  })

  win.loadURL(`file://${__dirname}/src/main/index.html`)

  win.on('closed', () => {
    win = null
    app.quit()
  })

})
