// OR (||) - Nosso boneco só pode sair se tiver sem chuva OU com guarda-chuva
let tempo = "chuva"
let item = "Guarda-chuva"
let podeSair = (tempo !== "chuva") || (item === "Guarda-chuva")
console.log(" Nosso personagem pode sair? " + podeSair)