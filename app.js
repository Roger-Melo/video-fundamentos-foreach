/*
01 

Apenas olhando o código abaixo (sem escrever código), você sabe qual valor 
cada let está armazenando após a execução do forEach?

Apenas pense em qual valor cada let armazenou. Você pode escrever um comentário 
temporário para ajudar a entender o fluxo. 

Só após concluir o raciocínio sobre os valores das lets, confira se os valores 
que você supôs estão corretos. Você pode usar console.log para visualizar os 
valores (após concluir seu raciocínio). 

O principal objetivo deste exercício é checar se você entendeu o fluxo de 
execuções da função do forEach.
*/

const fruits = ['maçã', 'banana', 'laranja']

let firstLet = 0
let secondLet = 3
let thirdLet = ''

fruits.forEach((fruit, index, array) => {
  const lastIndex = array.length - 1

  if (index === lastIndex) {
    thirdLet = fruit
  }
  
  firstLet = firstLet + lastIndex
  secondLet = secondLet * index
})

/*
02

Converta o for loop abaixo em um forEach.

O seu forEach deve ter a mesma funcionalidade do for. Isto é, ele deve 
preencher o array lettersInUppercase com a versão maiúscula das letras. 

Deve ficar assim: ['V', 'E', 'P']

Após converter, verifique se lettersInUppercase realmente está armazenando 
o valor que você deseja.
*/

const letters = ['v', 'e', 'p']
const lettersInUppercase = []

for (let i = 0; i < letters.length; i++) {
  lettersInUppercase.push(letters[i].toUpperCase())
}

/*
03

Declare um forEach logo abaixo da let paragraphs e acima da linha do 
section.innerHTML.

Após a execução do seu forEach, a let paragraphs deve conter uma string com 
a marcação HTML de 4 parágrafos (<p>). 

Cada parágrafo deve conter uma string do array reviews. 

Deve ficar assim: 
'<p>Eu sempre...</p><p>O primeiro...</p><p>Michael é...</p><p>Recomendo...</p>'

👆🏻 as reticências (...) acima são apenas uma representação do restante 
do parágrafo.
*/

const section = document.querySelector('[data-js="section"]')

const reviews = [
  'Eu sempre adorei o filme e quando descobri que tinha o livro também fiquei doido. Demorei um pouco mas acabei comprando e finalmente li \o/.',
  'O primeiro filme foi baseado nesse livro, porém o livro (como sempre) é muito mais completo, com mais personagens, mais acontecimentos e até mesmo mais dinossauros. Na verdade nesse livro tem coisas do segundo e terceiro filme também, eles mudaram bastante nos filmes, acho que pra ficar mais comercial, e se o filme é bom, o livro é 100 vezes melhor.',
  'Michael é um ótimo autor, esse sim pesquisa muito antes de escrever um livro, além da história que já prende sua atenção, ele fala bastante de genética (pra explicar como os dinossauros foram criados) e acaba falando um pouco de programação (informática), por causa dos programas avançados e modernos que o parque tinha. E isso foi uma das coisas que eu achei muito legal, ele explica as coisas com gráficos, tabelas, códigos ... enfim, o cara é foda hahaha.',
  'Recomendo esse livro pra quem curte uma boa história de ficção. Apesar de muita gente pensar que o livro não tem graça, porque o legal mesmo é ver o dinossauro no filme, com todos os efeitos especiais, eu digo pra deixar esse pensamento de lado, pois a história é tão bem contada e os detalhes são tão bem relatados, que você passa a fazer parte da história, e vive todas as emoções hahaha.'
]

let paragraphs = ''

// substitua este comentário pelo seu forEach

section.innerHTML = paragraphs

/*
04

Através do código abaixo, gere uma string no seguinte formato:
  
Segundo o site Metacritic, as 5 melhores séries já feitas são:
- Rectify, com metascore em 99 e user score em 8.2.
- The Larry Sanders Show, com metascore em 99 e user score em 4.8.
- Murder One, com metascore em 99 e user score em 4.6.
- Breaking Bad, com metascore em 99 e user score em 9.7.
- The Office (UK), com metascore em 98 e user score em 8.4.

Atenção! A string deve estar no exato formato acima. Isto é, ela precisa 
ser apenas uma única string com o conteúdo textual acima. 

Dica: para quebrar linha, você pode usar dentro da string o caractere 
especial \n. Pesquise por ele, se necessário. 
*/

const bestTVShows = [
  { title: 'Rectify', metascore: 99, userScore: 8.2 },
  { title: 'The Larry Sanders Show', metascore: 99, userScore: 4.8 },
  { title: 'Murder One', metascore: 99, userScore: 4.6 },
  { title: 'Breaking Bad', metascore: 99, userScore: 9.7 },
  { title: 'The Office (UK)', metascore: 98, userScore: 8.4 }
]

let message = 'Segundo o site Metacritic, as 5 melhores séries já feitas são:'

/*
05

Na const nameAsArray, insira manualmente seu primeiro nome na string vazia 
antes da invocação do método split. 

Se, por exemplo, o nome é João, deve ficar assim: 'João'.split('').

Abaixo da const nameAsArray, declare uma const messages e atribua a ela um 
array vazio.

Abaixo da const messages, adicione no array, quantas vezes forem necessárias, 
a seguinte string:

'- "X" é a Xª letra do meu nome.'

👆🏻 os "X" da string acima são apenas representações da letra e da posição dela 
em seu nome.

Por exemplo, se o nome é "Roger", as strings que o array messages deve conter 
são:

[
  '- "R" é a 1ª letra do meu nome.',
  '- "o" é a 2ª letra do meu nome.',
  ... e assim por diante, até a última letra do nome.
]

Após terminar de adicionar todas as strings no array messages, na linha 
seguinte, apenas para caráter de visualização, exiba no console cada string 
do array.
*/

const nameAsArray = ''.split('')

/*
06

Abaixo do array customers, declare uma const priceMessages e atribua um array 
vazio a ela.

Abaixo do array vazio que você acabou de criar, você precisa adicionar nesse 
array mensagens que devem conter o nome do cliente e o total que ele deve 
pagar.

O array priceMessages deve ficar assim: 
['Ricardo deve pagar R$ 119.80', 'Giselle deve pagar R$ 319.70']

Para formatar com duas casas decimais o preço total que cada cliente deve 
pagar, você pode usar o método toFixed(2).
*/

const customers = [
  {
    name: 'Ricardo',
    age: 25,
    orders: [
      { id: 59, product: 'Camiseta Comfort Em Algodão Com Estampa Route 66', price: 29.9 },
      { id: 129, product: 'Calça Skinny Em Sarja Com Bolsos', price: 89.9 }
    ]
  },
  {
    name: 'Giselle',
    age: 37,
    orders: [
      { id: 85, product: 'Bota Cano Médio Tratorada', price: 99.9 },
      { id: 645, product: 'Bolsa Transversal Com Alça De Corrente', price: 59.9 },
      { id: 491, product: 'Pijama Americano Curto Em Viscolycra Com Viés Contrastante', price: 159.90 }
    ]
  }
]

/*
07

Neste exercício, seu desafio será criar, do zero, uma função forEach que 
possua a mesma funcionalidade do método forEach original. 

Sua função não deve utilizar o método forEach original. 

A invocação da sua função forEach deve receber um array como 1º argumento 
e a declaração de uma função como 2º argumento. 

Para testar a sua função forEach, adicione as strings abaixo no array que 
a const loopMessages armazena. 

Ao final da execução da sua função forEach, o array loopMessages deve 
ficar assim:

[
  '1 é o 1º item do array [1, 2, 3]',
  '2 é o 2º item do array [1, 2, 3]',
  '3 é o 3º item do array [1, 2, 3]'
]
*/

const loopMessages = []
