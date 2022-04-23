const { app, BrowserWindow, Menu, ipcMain, shell } = require('electron');

const menuTemplate = require('./src/menu/menu');
const { saveFile}  = require('./src/menu/menuTools');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
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
     console.log(arg);
     saveFile(`${arg}`);
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