const { app, BrowserWindow, Menu, ipcMain } = require('electron')

/* const fs = require('fs') */

const {save, darkMode} = require('./menuTools')
/* const darkMode = require('./src/pageTools/script/renderer.js') */

const menuTemplate = [
    {
        label: 'Arquivo',
        submenu: [
            { label: 'New File', click: async () => console.log('Click in "New File"') },
            { type: 'separator' },
            { label: 'Save', click: async () => save() },
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
  /*           { label: 'Modo Escuro', click: async () => darkMode() }, */
        ]
    },
]

module.exports = menuTemplate