function show() {
    const contactList = document.getElementById("contact-list")
    console.log(contactList)  // Retorna o elemento com a ID específica

    const listElements = document.getElementsByTagName("li")
    console.log(listElements)  // Retorna uma HTMLColletion

    const contactInputs = document.getElementsByClassName("contact-input")
    console.log(contactInputs) // Retorna uma HTMLColletion 
    
    const contacts = document.querySelectorAll("#contact-list > li > label")
    console.log(contacts) // Retorna uma NodeList

    const contact1 = document.getElementsByName("contact1")
    console.log(contact1) // Retorna uma NodeList

    const firstContact = document.querySelector("#contact-list > li > label")
    console.log(firstContact) // Retorna o primeiro elemento que ele encontrar com as características especificadas
}

