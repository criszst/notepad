const { app, BrowserWindow, Menu, ipcMain, shell, ipcRenderer } = require('electron');

const menuTemplate = require('./menu');
const saveFile = require('./menuTools');

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
    });

    shell.beep();

    let menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    win.loadFile('src/pages/login.html');
}


app.on('ready', createWindow);

ipcMain.on('txtInArea', function(event, arg) {
        saveFile(arg);
        console.log(arg);
});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});