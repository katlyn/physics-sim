class PhysicsSystem {
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

      // Calculate positions
      object.position.x = object.position.x + object.velocity.x * time + 0.5 * object.acceleration.x * Math.pow(time, 2)
      object.position.y = object.position.y + object.velocity.y * time + 0.5 * object.acceleration.y * Math.pow(time, 2)

      // Calulate velocities
      object.velocity.x = object.velocity.x + object.acceleration.x * time
      object.velocity.y = object.velocity.y + object.acceleration.y * time
    }
  }
}

module.exports = PhysicsSystem
