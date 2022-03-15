const ipcRenderer = require('electron').ipcRenderer

const { webContents} = require('electron')

ipcRenderer.sendSync('txtInArea', 'teste')

