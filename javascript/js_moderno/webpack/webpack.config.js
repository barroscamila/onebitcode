    // #AULA - CONFIGURANDO O WEBPACK
    // Arquivo padrão de configuração do webpack
    // É preciso utilizar CommomJS por causa do Node

    /*
    const path = require('path')

    module.exports = {
        entry: { 
            main: './src/index.js',  // especificando o caminho da entrada
            hello: './src/hello.js' // mais de uma entrada
        },

        mode: "development",   // especificando o mode "development" ou "production"

        output: { 
            path: path.resolve(__dirname, 'public'), // especificando o caminho da saída, utilizando o modulo PATH do proprio node
            filename: "[name].bundle.min.js" // especificando nome do arquivo de saida (o "[name]" serve para diferenciar os arquivos de saida, quando tem mais de uma entrada)
        }
    }
    */

// -----------------------------------------------

    // AULA - LOADERS 
    // Permitem ler o CSS e incluir no arquivo de saída -> npm install --save-dev style-loader e css-loader

    /*
    module.exports = {
        entry: {
            main: './src/index.js'
        },
        mode: 'development',
        module: {
            rules: [{
                test: /\.css$/, // em qual arquivo serão utilizados os loaders
                use: ['style-loader', 'css-loader']  // quais loaders utilizar
            }]
        }
    }
    */

// -----------------------------------------------

    // AULA - PLUGINS 
    // Permite gerar um arquivo de saida .css separado do .js -> npm install --save-dev mini-css-extract-plugin 

    const miniCssExtractPlugin = require('mini-css-extract-plugin')

    module.exports = {
        entry: {
            main: './src/index.js'
        },
        mode: 'development',
        module: {
            rules: [{
                test: /\.css$/, 
                use: [miniCssExtractPlugin.loader, 'css-loader'] 
            }]
        },
        plugins: [
            new miniCssExtractPlugin()
        ]
    }

