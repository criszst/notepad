document.getElementById('btnLogin').addEventListener('click', () => {
    const pssword = document.getElementById('pssword')
    const modal = document.getElementById('login')
    
    if (pssword.value === '123') {
        modal.classList.remove('animate__fadeInLeft')

        modal.classList.add('animate__fadeOutRight')

        setTimeout(() => {
            window.location.assign('index.html')
        }, 1200)
    } else {
       console.log('senha errada')
    }
})