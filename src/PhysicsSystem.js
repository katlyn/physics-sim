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
      object.velocity.x = object.velocity.x + object.acceleration.x * time
      object.velocity.y = object.velocity.y + object.acceleration.y * time
    }
  }
}

module.exports = PhysicsSystem
