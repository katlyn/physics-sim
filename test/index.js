const physics = require('../src')

let testObject = new physics.Object({
  mass: 5,
  velocity: new physics.Velocity(5, 5),
  position: new physics.Position(0, 0),
  acceleration: new physics.Acceleration(-5, -5)
})

console.log(testObject)
console.log(testObject.velocity)
console.log(testObject.position)
console.log(testObject.acceleration)

let system = new physics.System({
  testObject: testObject
})

system.tick(5.34)

console.log()
console.log(testObject)
console.log(testObject.velocity)
console.log(testObject.position)
console.log(testObject.acceleration)
