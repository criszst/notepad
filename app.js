const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron')

const menuTemplate = require('./menu')
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            textAreasAreResizable: false,
            spellcheck: true,
        },
        movable: true,
        fullscreenable: true,
    })

    shell.beep()

    let menu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(menu)

    win.loadFile('src/pages/index.html')
}



app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

module.exports = createWindow