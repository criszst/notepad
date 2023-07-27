const { app, BrowserWindow, Menu, ipcMain, shell, webContents } = require('electron');
const crypto = require('crypto-js');
const fs = require('fs');

const menuTemplate = require('./src/menu/menu');
const { saveFile } = require('./src/menu/menuTools');


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: 'src/assets/Images/iconNotepad.ico',
        webPreferences: {
            nodeIntegration: true,
            textAreasAreResizable: false,
            contextIsolation: false,
            enableRemoteModule: true,
        },
        movable: true,
        fullscreenable: true,
    });

    win.toggleDevTools();

    shell.beep();

    let menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);

    var file = `${app.getAppPath()}/unname.txt`;
    var loadPage = 'src/pages/createPssword.html';

    if (fs.existsSync(file)) loadPage = 'src/pages/login.html';

    win.loadFile(loadPage);
}


app.on('ready', createWindow);

ipcMain.on('txtInArea', function (event, arg) {
    const cript = crypto.AES.encrypt(arg, 'Ha7vWAzxAe2VPEv5s/SrWsFwATIWNxFHYp+eEcWnyHI=').toString();
    saveFile(`${cript}`);
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

module.exports = createWindow;