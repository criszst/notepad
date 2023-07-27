const crypto = require('crypto-js');
const fs = require('fs');

const invalid = document.getElementById('invalidPssword');
const modal = document.getElementById('login');

document.getElementById('btnLogin').addEventListener('click', () => {
    const pssword = document.getElementById('pssword');
    const file = fs.readFileSync(__dirname.replace('\\src\\pages', '\\unname.txt')).toString();

    const decr = crypto.AES.decrypt(file, 'Ha7vWAzxAe2VPEv5s/SrWsFwATIWNxFHYp+eEcWnyHI=');
    const descPssword = decr.toString(crypto.enc.Utf8);
    
    if (pssword.value == descPssword) {
        modal.classList.remove('animate__fadeInLeft');

        modal.classList.add('animate__fadeOutRight');

        setTimeout(() => {
            window.location.assign('index.html');
        }, 1200);
    } else {
        invalid.style.display = 'block';
        invalid.classList.add('animate__animated', 'animate__headShake');
    }
});