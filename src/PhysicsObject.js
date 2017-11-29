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
  }
}

module.exports = PhysicsObject
