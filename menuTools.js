const fs = require('fs');
const dialog = require('electron').dialog;


function saveFile(StringForTxt) {
  dialog.showSaveDialog({
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
    }).then(result => {
        file = result.filePath;

        if (file === undefined) {
            console.log(file);
        }

        fs.writeFile(file, StringForTxt, (err) => {
            if (err) return console.log('o usuario nao selecionou nenhuma pasta ou tentou salvar o arquivo\n');
    });

    }).catch(err => {
         if (err) console.error(err);
    });

}

module.exports = saveFile;