const fs = require('fs');
const dialog = require('electron').dialog;
const crypto = require('crypto-js');

const menuTemplate = [
    {
        label: 'Arquivo',
        submenu: [
            {
                label: 'Carregar Arquivo',
                click(menuItem, browserWindow, event) {
                    dialog.showOpenDialog({
                        filters: [
                            {
                                name: 'txt',
                                extensions: ['txt']
                            },
                            {
                                name: 'html',
                                extensions: ['html'],
                            }
                        ]
                    }).then((file) => {
                        console.log(file.filePaths);
                        const txt = fs.readFileSync(`${file.filePaths.toString()}`).toString();

                        let toByte = crypto.AES.decrypt(txt, 'Ha7vWAzxAe2VPEv5s/SrWsFwATIWNxFHYp+eEcWnyHI=');
                        let originalTxt = toByte.toString(crypto.enc.Utf8);

                        browserWindow.webContents.send('loadFile', originalTxt);
                    });
                }
            }
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
];

module.exports = menuTemplate;