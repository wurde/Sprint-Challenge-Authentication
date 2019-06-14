'use strict'

/**
 * Dependencies
 */

const axios = require('axios')
const bcryptjs = require('bcryptjs')
const User = require('../models/User')

/**
 * Define controller
 */

class RootController {
  static hello(req, res) {
    res.status(200).send('Hi! Want to hear a joke? Try GET /jokes')
  }

  static async register(req, res) {
    try {
      const password_hash = bcryptjs.hashSync(req.body.password, 13)

      const user = await User.create({
        username: req.body.username,
        password_hash: password_hash
      })

      const token = await User.generate_token(user)

      res.status(201).json({user, token})
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' }})
    }
  }

  static async login(req, res) {
    try {
      const user = await User.find({ username: req.body.username })

      if (user) {
        if (bcryptjs.compareSync(req.body.password, user.password_hash)) {
          const token = await User.generate_token(user)

          res.status(200).json({user, token})
        } else {
          res.status(401).json({ error: { message: 'Invalid Credentials' }})
        }
      } else {
        res.status(404).json({ error: { message: `User not found for ${req.body.username}` }})
      }
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' }})
    }
  }

  static jokes(req, res) {
    const requestOptions = {
      headers: { accept: 'application/json' },
    }

    axios
      .get('https://icanhazdadjoke.com/search', requestOptions)
      .then(response => {
        res.status(200).json(response.data.results)
      })
      .catch(err => {
        res.status(500).json({ error: { message: 'Error Fetching Jokes' }})
      })
  }
}

/**
 * Export controller
 */

module.exports = RootController
