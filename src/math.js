class Timer {
  constructor(interval, fn, countr){
    this.interval = interval
    this.fn = fn
    this.countr = countr
    this.timer = 0
  }
  spawntarget(){
    this.timer += deltatime
    if(this.timer >= this.interval){
      this.fn()
      this.timer = 0
    }
  }
}

function distance(v1, v2) {
  const a = (v1.x - v2.x) ** 2;
  const b = (v1.y - v2.y) ** 2;
  const c = a + b;
  return Math.sqrt(c);
}


function randomSpawn(){
  const spawnR = (Math.floor(Math.random() * 10) + 1) + (Math.floor(Math.random() * 10) + 1)
  const spawnX = Math.floor(Math.random() * (canvas.width - spawnR)) + spawnR
  const spawnY = Math.floor(Math.random() * (canvas.height - spawnR)) + spawnR
  return {x: spawnX, y: spawnY, radius: spawnR}
}