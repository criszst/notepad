const { app } = require('electron')


const {save} = require('./menuTools')

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
        ]
    },
]

module.exports = menuTemplate