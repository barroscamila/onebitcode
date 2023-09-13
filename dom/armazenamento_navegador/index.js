// Para verificar os dados armazenadoss: DevTools --> Application


//Session Storage
document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
    window.sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', function () {
    const info = sessionStorage.getItem('info')
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
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023, 4, 27) + ";"
    const path = 'path=/' // a '/' representa todas as pastas da pagina
    document.cookie = cookie + expiration + path 
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2')
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023, 8, 9) + ";"
    const path = 'path=/'
    document.cookie = cookie + expiration + path 
    input.value = ''
    console.log(document.cookie)
})