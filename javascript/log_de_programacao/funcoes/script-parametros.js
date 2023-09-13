/*
    function dobro(x) {
        alert("O dobro de " + x + " é igual a " + (x * 2) + "!")
    }

    dobro(5)
    dobro(10)
*/


/*
    dobro() 
    --> x é retornado como undefined e o resultado da multiplicção retorna com NaN (not a number - erro)
*/


/* 
    --> Utilizar =" " para definir o valor padrão

    function dizerOla(nome = "mundo") {
        alert("Olá, " + nome + "!")
    }

    dizerOla("Camila")
    dizerOla()
*/


/* 
    function soma(a, b) {
        alert("O resultado da some é " + (a + b))
    }

    soma(7, 6)
*/


/*
    function criarUsuario(nome, email, senha, tipo = "admin") {
        const usuario = {
            nome, // mesmo que 'nome: nome'
            email,
            senha,
            tipo
        }
        console.log(usuario)
    }

    criarUsuario("Camila", "camilagdbarros@gmail.com", "1234") 

    -> Os parâmetros devem ser sempre passados na ordem correta
    -> Os parâmetros padrões da função devem ser colocados sempre por último
*/


/*
    function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
        // ...
    }

    function objetoComoParametro(usuario) {
        // ...
        usuario.nome
        usuario.email
    }

    muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

    const dadosDoUsuario = {
        nome: " ",
        telefone: " "
        email: " ",
        senha: " ",
        endereco: " ",
        aniversario: " "
    }

    objetoComoParametro(dadosDoUsuario)

    -> Ao invés de usar funções com muito parâmetros, é indicado utilizar um objeto como parâmetro
*/
