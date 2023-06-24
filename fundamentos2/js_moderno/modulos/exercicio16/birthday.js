const dayjs = require("dayjs")  //commonJS

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs() // data natual
    
    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(today, 'days') + 1  // para nao arredondar para 0 quando faltar menos de 1 dia


    console.log(`Idade: ${ageInYears}.\nPróximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}.\nDias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}.`)
}

birthday("1997-08-22") // passar data em formato inglês
