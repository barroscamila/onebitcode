const dayjs = require("dayjs")  //commonJS

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs() // data atual
    
    // diferença em anos de hoje para a data de aniversario, resultando na idade
    const ageInYears = today.diff(birthday, 'year')

    // próxima data de aniversario, somando 1 ano a idade atual
    const nextBirthday = birthday.add(ageInYears + 1, 'year')

    // diferença entre data atual e proximo aniversario
    const daysToNextBirthday = nextBirthday.diff(today, 'days') + 1  // somar 1 ao resultado para nao arredondar para 0 quando faltar menos de 1 dia


    console.log(`Idade: ${ageInYears}.\nPróximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}.\nDias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}.`)
}

birthday("1997-08-22") // passar data em formato inglês
