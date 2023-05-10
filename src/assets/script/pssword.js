const crypto = require('crypto-js');
const fs = require('fs');

var btn = document.getElementById('btnCreate');

btn.addEventListener('click', () => {
    let txtPssword = document.getElementById('pssword').value;
    const byte = crypto.AES.encrypt(txtPssword, 'Ha7vWAzxAe2VPEv5s/SrWsFwATIWNxFHYp+eEcWnyHI=').toString();

    fs.writeFile('unname.txt', byte, function (err) {
        if (!err) {
            window.location.href = 'index.html';
        }  else {
            dialog.showMessageBox({
                message: 'Erro ao salvar o arquivo',
                buttons: ['é foda'],
                type: 'error',
            });
        }
    });

    
});