import { inline } from "./inline.js"
import defaultInline from "./inline.js"
import exportDefault, { group } from "./non-inline.js" // é possível importar na mesma linha


inline()
defaultInline()

group()
exportDefault()


/*
    Formas de trabalhar com ESModules:
        1. export nomeado inline
            - para alterar o nome: { inline as i }

        2. export default inline   
            - só pode ter um por arquivo
            - o nome pode ser alterado 
            - pode ser uma função anonima

        3. export nomeado não-inline
            - exporta o arquivo em outra linha do código

        4. export default não-inline
            - exporta o arquivo em outra linha do código
*/