require('file-saver');

var btn = document.getElementById('btnCreate');
var confirm;

btn.addEventListener('click', () => {
    let txtPssword = document.getElementById('pssword').value;

    let blob = new Blob([txtPssword], { type: "text/plain;charset=utf-8" });
    saveAs(blob, 'pssword' + ".txt");

    confirm = true;

   if (confirm)  window.location.href = 'index.html';
});
