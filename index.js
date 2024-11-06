// Criação de um array (lista) de frutas
let frutas = ["maçã", "banana", "laranja", "morango", "abacaxi"];

// Exibindo o conteúdo do array
console.log("Lista de frutas:", frutas);

// Adicionando uma fruta ao final da lista
frutas.push("manga");
console.log("Depois de adicionar uma fruta:", frutas);

// Removendo a última fruta da lista
frutas.pop();
console.log("Depois de remover a última fruta:", frutas);

// Verificando o índice de uma fruta específica (exemplo: 'banana')
let indiceBanana = frutas.indexOf("banana");
console.log("Índice da banana:", indiceBanana);

// Verificando se uma fruta existe na lista
let existeLaranja = frutas.includes("laranja");
console.log("A fruta 'laranja' está na lista?", existeLaranja);

// Iterando sobre a lista e exibindo cada fruta
console.log("Frutas na lista:");
frutas.forEach(function(fruta) {
  console.log(fruta);
});
