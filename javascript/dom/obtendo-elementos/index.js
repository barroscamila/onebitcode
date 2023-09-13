function show() {
    const contactList = document.getElementById("contact-list")
    console.log(contactList)  // Retorna o elemento com o ID especifico

    const listElements = document.getElementsByTagName("li")
    console.log(listElements)  // Retorna uma HTMLColletion

    const contactInputs = document.getElementsByClassName("contact-input")
    console.log(contactInputs) // Retorna uma HTMLColletion 
    
    const contacts = document.querySelectorAll("#contact-list > li > label")
    console.log(contacts) // Retorna uma NodeList

    const contact1 = document.getElementsByName("contact1")
    console.log(contact1) // Retorna uma NodeList

    const firstContact = document.querySelector("#contact-list > li > label")
    console.log(firstContact) // Caso tenha mais de um elemento na busca, o querySelecto irá retornar apenas o primeiro elemento que ele encontrar com as características especificadas
}

