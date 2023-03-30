document.getElementById('btnLogin').addEventListener('click', () => {
    const pssword = document.getElementById('pssword');
    const invalid = document.getElementById('invalidPssword');
    const modal = document.getElementById('login');
    
    if (pssword.value === '') {
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