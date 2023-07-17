//console.log('hello')
let titleDiv = document.getElementById('title')
console.log('before:',titleDiv.innerText)

let message = 'Square color counter'
titleDiv.innerText = message;
console.log('after:',titleDiv.innerText)

titleDiv.innerHTML = `<p>${message}</p>`
titleDiv.style.backgroundColor ='blue'
titleDiv.style.color ='white'


let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

const squares= document.querySelectorAll('.colorSquare')

const timesClicked = {'red': 0, 'yellow': 0,'green': 0}
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] +=1
    square.innerText = timesClicked[square.value]}
})

function clearScores() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => {
    square.innerText = ''
  })
}
const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()
