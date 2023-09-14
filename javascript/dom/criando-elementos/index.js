function addInput() {
    const ul = document.getElementById("inputs") // selecionar a ul do html

    const newLi = document.createElement("li") // criando um item da ul
    newLi.className = "list-item"
    newLi.innerText = "Novo input: "

    const newInput = document.createElement("input")
    newInput.type = "text"
    newInput.name = "input"

    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}

