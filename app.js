const { app, BrowserWindow, Menu, ipcMain, shell, webContents } = require('electron')

const menuTemplate = require('./menu')
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webContents: BrowserWindow.webContents,
        webPreferences: {
            nodeIntegration: true,
            textAreasAreResizable: false,
            contextIsolation: false,
        },
        movable: true,
        fullscreenable: true,
    })

    shell.beep()

    let menu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(menu)

    win.loadFile('src/pages/index.html')

    win.webContents.on('did-finish-load', () => {
        let code = `let txtMain = document.getElementById('textMain')
                    console.log(textMain)
        `

        win.webContents.executeJavaScript(code);
    })
}



app.on('ready', createWindow)

ipcMain.on('txtInArea', function(event, arg) {
    console.log(arg)
    event.returnValue = 'aa'
  });

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