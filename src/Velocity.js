class Velocity {
  /**
   * Dictates the velocity of an object
   * @param {number} xVel - The horizontal velocity of an object
   * @param {number} yVel - The vertical velocity of an object
   */
  constructor (xVel, yVel) {
    this.x = xVel || 0
    this.y = yVel || 0
  }
}

module.exports = Velocity
