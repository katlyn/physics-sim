const constants = {
  gravitational: 6.67408 * Math.pow(10, -11),
  mercury: {
    mass: 0.330 * Math.pow(10, 24),
    gravity: 3.7
  },
  venus: {
    mass: 4.87 * Math.pow(10, 24),
    gravity: 8.9
  },
  earth: {
    mass: 5.97 * Math.pow(10, 24),
    gravity: 9.8
  },
  moon: {
    mass: 0.073 * Math.pow(10, 24),
    gravity: 1.6
  },
  mars: {
    mass: 0.643 * Math.pow(10, 24),
    gravity: 3.7
  },
  jupiter: {
    mass: 1898 * Math.pow(10, 24),
    gravity: 23.1
  },
  saturn: {
    mass: 568 * Math.pow(10, 24),
    gravity: 9
  },
  uranus: {
    mass: 86.8 * Math.pow(10, 24),
    gravity: 8.7
  },
  neptune: {
    mass: 102 * Math.pow(10, 24),
    gravity: 11
  },
  pluto: {
    mass: 0.0146,
    gravity: 0.7
  }
}

module.exports = constants
