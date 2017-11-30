const physics = require('../src')
const Canvas = require('canvas')
const fs = require('fs')

let testObject = new physics.Object({
  mass: 1,
  velocity: new physics.Velocity(0, 0.004),
  position: new physics.Position(200, 10),
  acceleration: new physics.Acceleration(0, 0)
})

let testObjectTwo = new physics.Object({
  mass: 10000,
  velocity: new physics.Velocity(0, 0),
  position: new physics.Position(250, 250),
  acceleration: new physics.Acceleration(0, 0)
})

console.log(testObject)

let system = new physics.System({
  testObject: testObject,
  testObjectTwo: testObjectTwo
})

let graph = new Canvas(500, 500)
let context = graph.getContext('2d')

let stats = []
let statsTwo = []

for (let i = 0; i < 10000; i++) {
  system.tick(i / 1000)
  stats.push([testObject.position.x, testObject.position.y])
  statsTwo.push([testObjectTwo.position.x, testObjectTwo.position.y])
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

context.lineWidth = 8
prevStat = statsTwo[0]
context.strokeStyle = '#ff0000'
for (let stat in statsTwo) {
  let theStat = statsTwo[stat]

  context.beginPath()
  context.moveTo(prevStat[0], prevStat[1])
  context.lineTo(theStat[0], theStat[1])
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
