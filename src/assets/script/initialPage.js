const body = document.body

let darkModeActive = body.classList.contains('darkmode--activated')

setInterval(() => {
    darkModeActive = body.classList.contains('darkmode--activated')

    if (darkModeActive === true) {
        body.classList.contains('NoDarkMode') ? body.classList.remove('NoDarkMode') : ''
        document.querySelector('p').style.color = 'rgb(214, 214, 214)'

    } else if (darkModeActive === false) {
        body.classList.add('NoDarkMode')
        document.querySelector('p').style.color = 'rgb(68, 68, 68)'

    }
}, 500)