const constants = require('./constants')
const Force = require('./Force')

class PhysicsSystem {
  /**
   * Create a new system.
   * @param {PhysicsObject[]} objects - the objects to add to the system
   */
  constructor (objects) {
    this.objects = objects
  }

  /**
   * Updates all objects in the system for the specified time.
   * @param {number} time - ammount of time to calculate
   */
  tick (time) {
    for (let key in this.objects) {
      let object = this.objects[key]
      for (let secondaryKey in this.objects) {
        // Make sure the object does not interact with itself
        if (key === secondaryKey) continue

        let secondaryObject = this.objects[secondaryKey]

        let xDistance = object.position.x - secondaryObject.position.x
        let yDistance = object.position.y - secondaryObject.position.y

        let hypotenuse = Math.sqrt(xDistance * xDistance + yDistance * yDistance)

        let gravitationalForce = constants.gravitational * object.mass * secondaryObject.mass / Math.pow(hypotenuse, 2)

        let xForce = gravitationalForce * xDistance / hypotenuse
        let yForce = gravitationalForce * yDistance / hypotenuse

        object.applyForce(new Force(xForce, yForce))
      }
      
      // Calculate positions
      object.position.x = object.position.x + (object.velocity.x * time) + (0.5 * object.acceleration.x * Math.pow(time, 2))
      object.position.y = object.position.y + (object.velocity.y * time) + (0.5 * object.acceleration.y * Math.pow(time, 2))

      // Calulate velocities
      object.velocity.x = object.velocity.x + object.acceleration.x * time
      object.velocity.y = object.velocity.y + object.acceleration.y * time
    }
  }
}

module.exports = PhysicsSystem
