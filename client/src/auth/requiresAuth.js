/**
 * Dependencies
 */

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

/**
 * Constants
 */

const token = localStorage.getItem('jwt')
axios.defaults.baseURL = process.env.API_URL || 'http://localhost:8080'

/**
 * Define auth
 */

function requiresAuth(Component) {
  return class Authenticated extends Component {
    render() {
      if (token) {
        return <Component {...this.props} />
      } else {
        return (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10 col-md-8 col-lg-5" style={{ marginTop: '80px' }}>
                <p>Requires authentication: <NavLink to="/signin">Sign in</NavLink></p>
              </div>
            </div>
          </div>
        )
      }
    }
  }
}

/**
 * Export auth
 */

export default requiresAuth
