'use strict'

/**
 * Dependencies
 */

const express = require('express')
const require_user_param = require('../middleware/require_user_param')
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
  .all(require_user_param)
  .post(RootController.register)

/**
 * Routes
 *   POST /login
 */

router.route('/login')
  .all(require_user_param)
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
