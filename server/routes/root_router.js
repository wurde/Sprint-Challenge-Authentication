'use strict'

/**
 * Dependencies
 */

const express = require('express')
const AuthController = require('../controllers/AuthController')
const RootController = require('../controllers/RootController')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /
 */

router.route('/')
  .get(RootController.hello)

/**
 * Routes
 *   POST /register
 */

router.route('/register')
  .post(RootController.register)

/**
 * Routes
 *   POST /login
 */

router.route('/login')
  .post(RootController.login)

/**
 * Routes
 *   GET /jokes
 */

router.route('/jokes')
  .all(AuthController.require_jwt_token)
  .get(RootController.jokes)

/**
 * Export router
 */

module.exports = router
