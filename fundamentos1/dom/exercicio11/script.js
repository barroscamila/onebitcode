function addPlayer() {
    // '.value' pega o valor em texto dentro do elemento!
    const position = document.getElementById("position").value
    const name = document.getElementById("name").value
    const number = document.getElementById("number").value

    const confirmation = confirm("Escalar " + name + " como " + position + "?")

    if (confirmation) {
        const teamList = document.getElementById("teamList")
        const playerItem = document.createElement("li")
        playerItem.id = "player-" + number
        playerItem.innerText = position + ": " + name + " (" + number + ")"
        teamList.appendChild(playerItem)

        document.getElementById("position").value = ""
        document.getElementById("name").value = ""
        document.getElementById("number").value = ""
    }
}

function removePlayer() {
    const number = document.getElementById("numberToRemove").value
    const playerToRemove = document.getElementById("player-" + number)

    const confirmation = confirm("Desejar remover o jogador " + playerToRemove.innerText + "?")

    if (confirmation) {
        //document.getElementById("teamList").removeChild(playerToRemove)
        playerToRemove.remove() // outra forma de remover
        document.getElementById("numberToRemove").value = ""
    }
    
}