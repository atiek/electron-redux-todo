
const path = require('path')
const electron = require('electron')
const { app } = electron
const { BrowserWindow } = electron

const ROOT_PATH = `file://${__dirname}`
const RUN_PATH = path.dirname(process.cwd())

app.on("window-all-closed", e => {
  app.quit()
})

app.on("ready", e => {
  const mainWindow = new BrowserWindow({width: 300, height: 600})
  const { webContents } = mainWindow

  mainWindow.loadURL(`${ROOT_PATH}/build/index.html`)
})
