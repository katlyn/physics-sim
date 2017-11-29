const physics = require('../src')
const Canvas = require('canvas')
const fs = require('fs')

let testObject = new physics.Object({
  mass: 5,
  velocity: new physics.Velocity(50, 50),
  position: new physics.Position(0, 500),
  acceleration: new physics.Acceleration(0, -9.8)
})

console.log(testObject)
console.log(testObject.velocity)
console.log(testObject.position)
console.log(testObject.acceleration)

let system = new physics.System({
  testObject: testObject
})

system.tick(1)

console.log()
console.log(testObject)
console.log(testObject.velocity)
console.log(testObject.position)
console.log(testObject.acceleration)

system.tick(-1)

console.log()
console.log(testObject)
console.log(testObject.velocity)
console.log(testObject.position)
console.log(testObject.acceleration)

let graph = new Canvas(3000, 1000)
let context = graph.getContext('2d')

let stats = []

for (let i = 0; i < 500; i++) {
  system.tick(i / 100)
  stats.push([testObject.position.x, testObject.position.y])
}

context.translate(0, graph.height)
context.scale(1, -1)
context.fillStyle = '#fff'
context.fillRect(0, 0, graph.width, graph.height)

let prevStat = stats[0]

for (let stat in stats) {
  let theStat = stats[stat]

  context.beginPath()
  context.moveTo(prevStat[0], prevStat[1])
  context.lineTo(theStat[0], theStat[1])
  context.lineWidth = 5
  context.lineCap = 'round'
  context.stroke()

  prevStat = theStat
}

let pngfile = fs.createWriteStream('./test-graph.png')
let stream = graph.pngStream()
stream.on('data', function (chunk) {
  pngfile.write(chunk)
})
stream.on('end', function () {
  console.log('saved png')
})
