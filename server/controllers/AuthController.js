'use strict'

/**
 * Dependencies
 */

const jwt = require('jsonwebtoken')

/**
 * Constants
 */

const jwt_secret = process.env.JWT_SECRET ||
  'add a .env file to root of project with the JWT_SECRET variable'

/**
 * Define controller
 */

class AuthController {
  static require_jwt_token(req, res) {
    const token = req.get('Authorization')

    if (token) {
      jwt.verify(token, jwtKey, (err, decoded) => {
        if (err) return res.status(401).json(err)

        req.decoded = decoded

        next()
      })
    } else {
      return res.status(401).json({
        error: 'No token provided, must be set on the Authorization Header',
      })
    }
  }
}

/**
 * Export controller
 */

module.exports = AuthController
