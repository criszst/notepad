const { app, ipcMain } = require('electron')

const saveFile = require('./menuTools')

/* function saveTxt() {
  ipcMain.on('txtInArea', function(event, arg) {
        console.log(arg)
        saveFile(arg)
        event.returnValue = 'aa'
      });
} */

const menuTemplate = [
    {
        label: 'Arquivo',
        submenu: [
            { label: 'Novo Arquivo', click: async () => console.log('Click in "New File"') },
            { type: 'separator' },
            { type: 'separator' },
            { label: 'Fechar', click: async () => app.quit() },
        ]
    },
    {
        label: 'Editar',
        submenu: [
            { role: 'undo' },
            
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
        ]
    },

    {
        label: 'Ver',
        submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            { role: 'toggleDevTools' },
            { type: 'separator' },
            { role: 'resetZoom' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },

    {
        label: 'Opções',
        submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            { type: 'separator' },
        ]
    },
]

module.exports = menuTemplate