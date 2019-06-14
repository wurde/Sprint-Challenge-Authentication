'use strict'

/**
 * Dependencies
 */

const jsonwebtoken = require('jsonwebtoken')
const db_client = require('../db/client')
const secrets = require('../config/secrets')

/**
 * Define model
 */

class User {
  static find(filter) {
    return db_client('users').where(filter).first()
  }

  static async create(user_param) {
    let [id] = await db_client('users').insert(user_param)

    let user = await db_client('users').where({id: id}).first()

    return user
  }

  static async generate_token(user) {
    const payload = {
      subject: user.id,
      username: user.username
    }

    const options = {
      expiresIn: '1d',
    }

    return jsonwebtoken.sign(payload, secrets.jsonwebtoken_secret, options)
  }
}

/**
 * Export model
 */

module.exports = User
