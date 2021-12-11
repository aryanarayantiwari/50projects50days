const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const clear = document.getElementById('clear')
const colorEl = document.getElementById('color')
const sizeValue = document.querySelector('.size')

let size = 20
let isPressed = false
colorEl.value = 'black'
let color = colorEl
let x 
let y  


canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY 

})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    x = undefined
    y = undefined 
    
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y= y2
    }
})

increase.addEventListener('click', () => {
    size+=5
    if (size > 50){
        size = 50
    }
    sizeValue.innerText = size
})

decrease.addEventListener('click', () => {
    size-=5
    if(size < 1 ){
        size = 5
    }
    sizeValue.innerText = size
})

clear.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

colorEl.addEventListener('change', (e) => color = e.target.value)

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}
