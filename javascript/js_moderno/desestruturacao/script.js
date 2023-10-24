const person = {
    name: 'Luke',
    job: 'Farmer',
    parents: ['Anakin', 'Padme']
}

//  Forma tradicional

const name = person.name 
console.log(name)


// Desestruturação (Objeto)

const { job, parents } = person
console.log(name, job, parents)


// Desestruturação (Array)

const [ father, mother ] = parents 
console.log(father, "and", mother)



// Desestruturação (Funções)

/*
function createUser(person) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name: person.name,
        job: person.job,
        parents: person.parents
    }
}
*/

function createUser({ name, job, parents }) {
    const id = Math.floor(Math.random() * 999)
    return {
        id,
        name,
        job,
        parents
    }
}

const luke = createUser(person)
console.log(luke)

// ao invés de passar o objeto, está sendo passando as variaveis conforme as propriedades do objeto (desestruturacao)