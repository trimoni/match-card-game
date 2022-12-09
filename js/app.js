let errors = 0
let cardList = [
  'darkness',
  'double',
  'fairy',
  'fighting',
  'fire',
  'grass',
  'lightning',
  'metal',
  'psychic',
  'water' 
]

let cardSet
let board = []

window.onload = function(){
  shuffleCards()
  startGame()
}

function shuffleCards(){
  cardSet = cardList.concat(cardList) // two of each card
}