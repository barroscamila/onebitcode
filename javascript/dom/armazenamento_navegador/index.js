// Para verificar os dados armazenadoss: DevTools --> Application --> Storage --> Local Storage, Session Storage, Cookies

//Session Storage
document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
    window.sessionStorage.setItem('info', input.value) // pode ser apenas sessionStorage, sem o window
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', function () {
    const info = sessionStorage.getItem('info') // acessar a key 'info'
    alert('A informação salva é: ' + info)
})


//Local Storage
document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function () {
    const t = localStorage.getItem('text')
    alert('O texto salvo na Local Storage é: ' + t)
})


//Cookies
document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')
    // cookieName=value; expires=UTCStringDate; path=/; FORMATO DO COOKIE 
    const cookie = 'info=' + input.value + ';' //cookieName
    const expiration = 'expires=' + new Date(2023, 10, 27) + ';' //expires
    const path = 'path=/;' // a '/' representa todas as pastas da pagina
    document.cookie = cookie + expiration + path 
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2')
    const cookie2 = 'text=' + input.value + ';'
    const expiration2 = 'expires=' + new Date(2024, 11, 1) + ';'
    const path2 = 'path=/;'
    document.cookie = cookie2 + expiration2 + path2 
    input.value = ''
    console.log(document.cookie)
})