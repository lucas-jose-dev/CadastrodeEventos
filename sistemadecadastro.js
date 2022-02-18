let dataEvento = new Date(`09/28/2022`)
let dataHoje = new Date()

console.log(dataEvento)

if(dataEvento >= dataHoje) {
    console.log("Evento válido")

   let listaParticipantes = ["Marcelo","Lucas","Lana","Maria"]

   for (let contador = 0; contador < listaParticipantes.length; contador++) {
       console.log (listaParticipantes[contador])
   }

} else {
    console.log("Evento inválido")


}  

let idadeParticipante = 18
if(idadeParticipante >= 18) {
    console.log("È permitido cadastrar")
}else {
    console.log("Não é possivel cadastrar idade insuficiente")
}

let numeroParticipantes = 100
if(numeroParticipantes < 100) {
    console.log("Ainda podemos cadastrar")
}else {
    console.log("O limite de participante foi excedido, não sera permitido o castro")
}