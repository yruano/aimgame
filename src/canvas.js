const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.background = '#000000'

const center = {
  x: canvas.width / 2,
  y: canvas.height / 2
}

window.addEventListener('resize' , event => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  center.x = canvas.width / 2
  center.y = canvas.height / 2
})

const gl = canvas.getContext('2d')