// Arquivo padrão de configuração do webpack
// É preciso utilizar CommomJS por causa do Node

// -----------------------------------------------

// AULA - PUGLINS


// AULA - LOADERS (permitem ler o CSS e incluir no arquivo de saída -> style-loader e css-loader) 

module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    module: {
        rules: [{
            // test: 
        }]
    }
}


/*
    // AULA - CONFIGURANDO O WEBPACK

    const path = require('path')

    module.exports = {
        entry: { 
            main: './src/index.js',  // especificando o caminho da entrada
            hello: './src/hello.js' // mais de uma entrada
        },

        mode: "production",   // especificando o mode "development" ou "production"

        output: { 
            path: path.resolve(__dirname, 'public'), // especificando o caminho da saída, utilizando o modulo PATH do proprio node
            filename: "[name].bundle.min.js" // especificando nome do arquivo de saida (o "[name]" serve para diferenciar os arquivos de saida, quando tem mais de uma entrada)
        }
    }
*/