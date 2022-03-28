const { app, BrowserWindow, Menu, ipcMain, shell, webContents } = require('electron')

const menuTemplate = require('./menu')
const saveFile = require('./menuTools')

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

    win.loadFile('src/pages/login.html')

    win.webContents.on('did-finish-load', () => {
        let code = `
        const ipcRenderer = require('electron').ipcRenderer

        let txtMain = document.getElementById('textMain')

        document.addEventListener('keydown', function(e) {
           if (e.ctrlKey && e.key.toLowerCase() === 's' && txtMain.value !== '') {
                ipcRenderer.sendSync('txtInArea', txtMain.value)
                console.log('a')
           } 
           else if (e.ctrlKey && e.key.toLowerCase() === 's' && txtMain.value == '') {
               alert('n tem nd para salvar')
           }
        }) `

        win.webContents.executeJavaScript(code);
    })
}


app.on('ready', createWindow)

ipcMain.on('txtInArea', function(event, arg) {
        saveFile(arg)
        event.returnValue = console.log(event);
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