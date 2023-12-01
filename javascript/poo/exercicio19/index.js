const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do post", "Lorem ipsum dolor sic...")
const post2 = john.writePost("Título do segundo post", "Lorem ipsum dolor sic...")

post.addComment("Camila Barros", "Muito bom!")
post.addComment("Lucas", "Achei interessante.")

// console.log(john)
// console.log(post)
console.log(post.comments)
