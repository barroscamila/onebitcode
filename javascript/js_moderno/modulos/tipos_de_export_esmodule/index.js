import { inline as i } from "./inline.js"
import dI from "./inline.js"
import eD, { group } from "./non-inline.js" // é possível importar na mesma linha


i()
dI()

group()
eD()


/*
    Formas de trabalhar com ESModules:
        1. export nomeado inline
            - para alterar o nome: { inline } --> { inline as i }

        2. export default inline   
            - export padrão, só pode ter um por arquivo
            - o nome pode ser alterado (defaultInline --> dI)
            - pode ser uma função anonima

        3. export nomeado não-inline
            - exporta o arquivo em outra linha do código

        4. export default não-inline
            - exporta o arquivo em outra linha do código
            - o nome pode ser alterado (exportDefault --> eD)
*/