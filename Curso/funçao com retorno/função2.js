
let userName = getFirstName("Diego Souza Silva")

console.log("Seja Bem vindo " + userName) 

function getFirstName(name){
let firstName = name.split (" ")[0]
return firstName
}

