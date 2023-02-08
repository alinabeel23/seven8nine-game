function init(){
const grid = document.querySelector('.grid')
// let object = document.querySelector('.object')
// let moveBy = 10
let dot = 'right'

let snakePosition = 43
let foodPosition = 0
let totalFood = 0
let resetButton = document.querySelector('#resetgame')

let startButton = document.querySelector('#startgame')
let scoreCount = 0
let score = document.querySelector('#score')

// let blockadePosition = [10, 11, 21]


const width = 10
const gridCellCount = width * width
const cells = []

clearInterval()


function createGrid() {
    for (let i = 0; i < gridCellCount; i++){
        const cell = document.createElement('div')
        cell.textContent = i
        cells.push(cell)
        grid.appendChild(cell)
    }
}



createGrid()

// function drawSnake(){
//     snakePosition.push('snake')

//     snakePosition.forEach(pos => {
//         cells[pos].classList.remove('snake')
//         cells[pos].classList.add('snake')
//         console.log(snakePosition)
//     })
// }

// drawSnake()

// function moveSnake(){
//     let tail = snakePosition.pop;
//     cells[tail].classList.remove('snake')
//     snakePosition.unshift(snakePosition[0] + changeDirection)
// }

function onStart(){
    setInterval(changeDirection, 500)
    startGame()

}



function reset(){
    score.innerText = '0'
    scoreCount = 0
    cells[snakePosition].classList.remove('snake')
    snakePosition = 43
    dot = 'right'
    cells[foodPosition].classList.remove('food')
    totalFood = 0
    startGame()
}




function startGame(){
    // snakePosition.classList.add('snake')
    // cells[snakePosition].classList.add('snake')
    const timer = setInterval(() => {
        if (totalFood > 9){
            clearInterval(timer)
            alert(score)
            return
        }

        totalFood ++ 
        cells[foodPosition].classList.remove('food')
        foodPosition = Math.floor(Math.random() * gridCellCount)
        cells[foodPosition].classList.add('food')
    }, 1200)


    

    // cells[blockadePosition].classList.add('blockade')


}


// function eatFood() {

//     let snakeLength = cells[snakePosition[snakePosition.length + 1]]
//     console.log(snakeLength.classList)

//     if (snakeLength.classList.contains('food')) {
//       snakePosition.push(snakePosition[0] + 1);
//     }
//   }



// eatFood()




function changeDirection (){
    console.log(dot)
    eatFood()
    if (dot === 'right') {
        // snakePosition.forEach(pos => {
            cells[snakePosition].classList.remove('snake')
            if ((snakePosition + 1) % 10 === 0 ){
                snakePosition = snakePosition - 10
            }
            snakePosition = snakePosition + 1
            cells[snakePosition].classList.add('snake')
        // }) 
   
    }
    if (dot === 'left') {
        cells[snakePosition].classList.remove('snake')
        if (snakePosition % 10 === 0 ){
            snakePosition = snakePosition + 10
        }
        snakePosition = snakePosition - 1
        cells[snakePosition].classList.add('snake')
    
    }
    if (dot === 'up') {
        cells[snakePosition].classList.remove('snake')
        if (snakePosition < 10){
            snakePosition = snakePosition + 100
        }
        snakePosition = snakePosition - 10
        cells[snakePosition].classList.add('snake')
    }
    if (dot === 'down') {
        cells[snakePosition].classList.remove('snake')
        if (snakePosition >=  90){
            snakePosition = snakePosition - 100
        }
        snakePosition = snakePosition + 10
        cells[snakePosition].classList.add('snake')
    }
}

// function changeDirectionUp (){
   
//     cells[snakePosition].classList.remove('snake')
//     if (snakePosition < 10){
//         snakePosition = snakePosition + 100
//     }
//     snakePosition = snakePosition - 10
//     cells[snakePosition].classList.add('snake')
    
// }
// function changeDirectionDown (){

//     cells[snakePosition].classList.remove('snake')
//     if (snakePosition >=  90){
//         snakePosition = snakePosition - 90
//     }
//     snakePosition = snakePosition + 10
//     cells[snakePosition].classList.add('snake')
// }
// function changeDirectionLeft (){

//     cells[snakePosition].classList.remove('snake')
//     if (snakePosition % 10 === 0 ){
//         snakePosition = snakePosition + 10
//     }
//     snakePosition = snakePosition - 1
//     cells[snakePosition].classList.add('snake')

// }
// function changeDirectionRight (){

//     cells[snakePosition].classList.remove('snake')
//     if ((snakePosition + 1) % 10 === 0 ){
//         snakePosition = snakePosition - 10
//     }
//     snakePosition = snakePosition + 1
//     cells[snakePosition].classList.add('snake')
// }

startButton.addEventListener('click', onStart)
resetButton.addEventListener('click', reset)


window.addEventListener('keyup', (e) => {
switch (e.key) {
    case "ArrowLeft":
        dot = 'left'
        changeDirection ()
        // changeDirectionLeft()
        break;
    case "ArrowRight":
        dot = 'right'
        changeDirection ()
        // changeDirectionRight()
        break;
    case "ArrowUp":
        dot = 'up'
        changeDirection ()
        // changeDirectionUp()
        break;
    case "ArrowDown":
        dot = 'down'
        changeDirection ()
        // changeDirectionDown()
        break;
}
})

// setInterval(changeDirection, 700)

// startGame()


function eatFood(){
    if(cells[snakePosition].classList.contains('food')){
        // if( snakePosition === foodPosition){
        scoreCount++
        score.textContent = scoreCount
        cells[snakePosition].classList.remove('food')
}
}

eatFood()
// function eatFood(){
//     if(cells[snakePosition].classList.contains('food')){
//         scoreCount++
//         score.innerText = scoreCount

// }

// eatFood()


// function eatFood(){
//     if(snakePosition.classList.contains('food')){
//         scoreCount++
//         score.innerText = scoreCount

// }

// eatFood()


// snakePosition.addEventListener('keyup', (e) => {
//      switch (e.key) {
//      }
//      })




// window.addEventListener('load', () =>{
//     object.style.position = 'relative'
//     object.style.left = 0
//     object.style.top = 0
// })

// window.addEventListener('keyup', (e) => {
//     switch (e.key) {
//         case 'ArrowLeft':
//             object.style.left = parseInt(object.style.left) - moveBy + 'px';
//             break;
//         case 'ArrowRight':
//             object.style.left = parseInt(object.style.left) + moveBy + 'px';
//             break;
//         case 'ArrowUp':
//             object.style.top = parseInt(object.style.top) - moveBy + 'px';
//             break;
//         case 'ArrowDown':
//             object.style.top = parseInt(object.style.top) + moveBy + 'px';
//             break;
//     }
// });



}
window.addEventListener('DOMContentLoaded', init)