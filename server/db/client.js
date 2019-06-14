'use strict'

/**
 * Dependencies
 */

const knex = require('knex')
const config = require('../../knexfile.js')

/**
 * Define client
 */

const client = knex(config.development)

/**
 * Export client
 */

module.exports = client
