/**
 * Dependencies
 */

import axios from 'axios'
import React, { Component } from 'react'
import { JokesStyle } from './styles/index'
import '../auth/addInterceptors'
import requiresAuth from '../auth/requiresAuth'

/**
 * Define component
 */

class Jokes extends Component {
  state = {
    jokes: []
  }

  componentDidMount() {
    axios.get('http://localhost:8080/jokes')
      .then(res => {
        this.setState(() => ({ jokes: res.data }))
      })
      .catch(({ response }) => {
        console.error(response)
      })
  }

  render() {
    return (
      <JokesStyle>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-5" style={{ marginTop: '80px' }}>
              <h3>Jokes</h3>

              <ul>
                {this.state.jokes.map(joke => (
                  <li key={joke.id}>{joke.joke}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </JokesStyle>
    )
  }
}

/**
 * Export component
 */

export default requiresAuth(Jokes)
