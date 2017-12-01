const Force = require('./Force')

/** Class representing an object */
class PhysicsObject {
  /**
   * Options for an object
   * @typedef {ObjectOptions} ObjectOptions
   * @property {number} [mass] - The mass of the object
   * @property {Velocity} [velocity] - the velocity of the object.
   * @property {Acceleration} [acceleration] - the acceleration of the object.
   * @property {Postition} [position] - the (x,y) cooridinates of the object,
   */

  /**
   * Create an object
   * @param {ObjectOptions} options - The options for the object
   */
  constructor (options) {
    this.mass = options.mass
    this.velocity = options.velocity
    this.acceleration = options.acceleration
    this.position = options.position
    this.gravitationalAcceleration = new Force(0, 0)
  }

  /**
   * Applies a force to an Object
   * @param {Force} force - the force to apply
   */
  applyForce (force) {
    console.log(force)
    let gravitationalAccelerationX = force.x / this.mass
    let gravitationalAccelerationY = force.y / this.mass
    this.gravitationalAcceleration = new Force(gravitationalAccelerationX, gravitationalAccelerationY)
  }
}

module.exports = PhysicsObject
