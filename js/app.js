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
let rows = 4
let columns = 5

let cardOneSelected
let cardTwoSelected

window.onload = function(){
  shuffleCards()
  startGame()
}

function shuffleCards(){
  cardSet = cardList.concat(cardList) // two of each card
  console.log(cardSet)
  for (let i = 0; i < cardSet.length; i++){
    let j = Math.floor(Math.random() * cardSet.length)
    let temp = cardSet[i]
    cardSet[i] = cardSet[j]
    cardSet[j] = temp
  }
  console.log(cardSet)
}

function startGame(){
  for (let r = 0; r < rows; r++){
    let row = []
    for (let c = 0; c < columns; c++){
      let cardImg = cardSet.pop()
      row.push(cardImg)

      let card = document.createElement('img')
      card.id = r.toString() + '-' + c.toString()
      card.src = cardImg + '.jpeg'
      card.classList.add('card')
      card.addEventListener('click', selectCard)
      document.getElementById('board').append(card)
    }
    board.push(row)
  }
  console.log(board)
  setTimeout(hideCards, 1000)
}

function hideCards() {
  for (let r = 0; r < rows; r++){
    for (let c = 0; c < columns; c++){
      let card = document.getElementById(r.toString() + '-' + c.toString())
      card.src = 'back.jpeg'
    }
  }
}

function selectCard() {
  if(this.src.includes('back')) {
    if (!cardOneSelected) {
      cardOneSelected = this

      let coords = cardOneSelected.id.split('-')
      let r = parseInt(coords[0])
      let c = parseInt(coords[1])

      cardOneSelected.src = board[r][c] + '.jpeg'
    }
    else if (!cardTwoSelected && this != cardOneSelected){
      cardTwoSelected = this

      let coords = cardTwoSelected.id.split('-')
      let r = parseInt(coords[0])
      let c = parseInt(coords[1])

      cardTwoSelected.src = board[r][c] + '.jpeg'
      setTimeout(update, 1000)
    }
  }
}

function update(){
  if(cardOneSelected.src != cardTwoSelected.src){
    cardOneSelected.src = 'back.jpeg'
    cardTwoSelected.src = 'back.jpeg'
    errors += 1
    document.getElementById('errors').innerText = errors
  }
}