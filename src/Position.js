class Position {
  /**
   * Dictates the position of an object
   * @param {number} xPos - The horizontal position of an object
   * @param {number} yPos - The vertical position of an object
   */
  constructor (xPos, yPos) {
    this.x = xPos || 0
    this.y = yPos || 0
  }
}

module.exports = Position
