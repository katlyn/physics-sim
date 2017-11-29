class Acceleration {
  /**
   * Dictates the acceleration of an object
   * @param {number} xAccel - The horizontal acceleration of an object
   * @param {number} yAccel - The vertical acceleration of an object
   */
  constructor (xAccel, yAccel) {
    this.x = xAccel || 0
    this.y = yAccel || 0
  }
}

module.exports = Acceleration
