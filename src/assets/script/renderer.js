document.getElementById('btnLogin').addEventListener('click', () => {
    const pssword = document.getElementById('pssword')
    
    if (pssword.value == '123') {
        window.location.assign('index.html')
    }
})