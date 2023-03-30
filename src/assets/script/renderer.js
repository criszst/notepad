const fs = require('fs');
require('file-saver');

var btn = document.getElementById('btnCreate');

btn.addEventListener('click', () => {
    let txtPssword = document.getElementById('pssword').value;

    let blob = new Blob([txtPssword], { type: "text/plain;charset=utf-8" });
     saveAs(blob, 'pssword' + ".txt");
});