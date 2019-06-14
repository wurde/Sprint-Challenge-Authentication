/**
 * Dependencies
 */

import React from 'react'
import { SignupStyle } from './styles/index'

/**
 * Define component
 */

function Signup() {
  return (
    <SignupStyle>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-5" style={{ marginTop: '80px' }}>
            <h3>Signup</h3>
          </div>
        </div>
      </div>
    </SignupStyle>
  )
}

/**
 * Export component
 */

export default Signup
