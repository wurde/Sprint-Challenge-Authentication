'use strict'

/**
 * Dependencies
 */

const axios = require('axios')

/**
 * Define controller
 */

class RootController {
  static hello(req, res) {
    res.status(200).send('Hi! Want to hear a joke? Try GET /jokes')
  }

  static register(req, res) {
    res.sendStatus(200)
  }

  static login(req, res) {
    res.sendStatus(200)
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
        res.status(500).json({ message: 'Error Fetching Jokes', error: err })
      })
  }
}

/**
 * Export controller
 */

module.exports = RootController
