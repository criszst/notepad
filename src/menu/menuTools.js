const fs = require('fs');
const dialog = require('electron').dialog;

module.exports.saveFile = async (StringForTxt) => {
   await dialog.showSaveDialog({
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
    }).then((r) => {
        console.log(r);
        fs.writeFile(r.filePath, `${StringForTxt.toString()}`, function (err) {
            if (err) console.error(err);
        });
    });
};
