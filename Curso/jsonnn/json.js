// JSON - JavaScript Objetct Notation
// chave e valor com objetivo de transferir dados

let invoice = {
   name: "Diego",
   age: 18,
   products: {
    0: ["mouse 2xwm", 29.90],
    1: ["teclado mecanico", 129.99],
    2: ["Monitor", 899.99]
   }
}
let name = "Diego"
let age = 18
let products = ["mouse 2xwm", "teclado mecanico", "Monitor"]
let productsValue = [29.90, 129.99, 899.99]

generateInvoice(invoice)

function generateInvoice(invoice){
console.log(`o comprador é  ${invoice.name}`)
console.log(`a idade é ${invoice.age}`)
console.log("--------")

for(let index in invoice.products){
  let [productName, productPrice] = invoice.products[index]
  console.log(`${productName}: R$ ${productPrice}`)
}


 
}