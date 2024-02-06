function PhoneNumber(phoneNumberString) {
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "") // espaço em branco, letras minusculas e maiusculas
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0] // codigo do pais que está logo após o + (1 a 3 digitos)
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0] // ddd que esta entre os parenteses
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "") // todos os caracteres apos o fechamento do parenteses (retirando o '-' com o replace)
}

console.log(new PhoneNumber('+55 (22) 99919-9531'))
console.log(new PhoneNumber('+1 (55) as99384-1a111'))
