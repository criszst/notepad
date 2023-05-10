const fs = require('fs');
const crypto = require('crypto-js');
const { dialog, app } = require('electron');

module.exports.saveFile = async (StringForTxt) => {
    await dialog.showSaveDialog({
        filters: [
            {
                name: 'txt',
                extensions: ['txt']
            },
        ],
    }).then((r) => {
        if (r.canceled) dialog.showMessageBox({
            message: 'O salvamento do arquivo foi cancelado.',
            buttons: ['é foda'],
            type: 'warning',
        });
        
        fs.writeFile(r.filePath, `${StringForTxt.toString()}`, function (err) {
            if (err) console.error(err);
        });
    });
};
