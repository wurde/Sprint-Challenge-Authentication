'use strict'

/**
 * Define middleware
 */

function require_user_param(req, res, next) {
  if (!req.body) {
    return res.status(400).json({ error: { message: 'Missing required user data.' }})
  }

  if (!req.body.username) {
    return res.status(400).json({ error: { message: 'Missing required username field.' }})
  }

  if (!req.body.password) {
    return res.status(400).json({ error: { message: 'Missing required password field.' }})
  }

  next()
}

/**
 * Export middleware
 */

module.exports = require_user_param
