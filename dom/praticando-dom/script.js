function addContact() {
    const contactSection = document.getElementById("contacts-list")

    const h3 = document.createElement("h3")
    h3.innerText = "Contato"

    const ul = document.createElement("ul")
    
    const nameLi = document.createElement("li")
    nameLi.innerHTML = "<label for='fullname'>Nome: </label>"
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.name = "fullname"
    nameInput.id = "fullname"
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement("br"))

    const phoneLi = document.createElement("li")
    phoneLi.innerHTML = "<label for='phonenumber'>Telefone: </label>"
    const phoneInput = document.createElement("input")
    phoneInput.type = "text"
    phoneInput.name = "phonenumber"
    phoneInput.id = "phonenumber"
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement("br"))

    const addressLi = document.createElement("li")
    addressLi.innerHTML = "<label for='address'>Endereço: </label>"
    const addressInput = document.createElement("input")
    addressInput.type = "text"
    addressInput.name = "address"
    addressInput.id = "address"
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement("br"))

    contactSection.append(h3, ul)
    // o append permite adicionar vários elementos ao invés de dicionar um por um
}

function removeContact() { //Remover o último elemento
    const contactSection = document.getElementById("contacts-list")

    const titles = document.getElementsByTagName("h3")
    const contacts = document.getElementsByTagName("ul")

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}