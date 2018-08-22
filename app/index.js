'use strict'

const { app, BrowserWindow } = require('electron')
const devTools = require('./devtools')
const handleErrors = require('./handle-errors')
var win = ''

if (process.env.NODE_ENV === 'development') {
  devTools()
}

app.on('before-quit', () => {

})

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

  win.loadURL(`file://${__dirname}/src/login/index.html`)

  win.on('closed', () => {
    win = null
    app.quit()
  })

})
