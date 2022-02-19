class Target {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
    this.moveSpeed = 0
    this.color = '#ffffff'
  }
  draw() {
    drawCircle(this.x, this.y, this.radius, this.color)
  }
}


const targets = []

const spawnTargetTime = new Timer(
  0.5, () => {
    let target = new Target(0, 0)
    let targetsp = randomSpawn()
    target.x = targetsp.x
    target.y = targetsp.y
    target.radius = targetsp.radius
    targets.push(target)
  }
)


window.addEventListener('mousedown', event => {
  for (let i = 0; i < targets.length; ++i) {
    const target = targets[i]
    const mousePos = { x: event.x, y: event.y }
    const targetPos = { x: target.x, y: target.y }
    if (distance(mousePos, targetPos) <= target.radius)
      targets.splice(i--, 1)
  }
})


let deltatime = performance.now() / 1000

function loop() {
  deltatime = performance.now() / 1000 - deltatime

  // 화면 지우기
  gl.clearRect(0, 0, canvas.width, canvas.height)

  // 타겟 생성하기
  spawnTargetTime.spawntarget()

  // 화면에 타겟 그리기
  for (const target of targets) {
    target.draw()
  }

  deltatime = performance.now() / 1000
  requestAnimationFrame(loop)
}

requestAnimationFrame(loop)