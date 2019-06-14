/**
 * Dependencies
 */

import React from 'react'
import { SigninStyle } from './styles/index'

/**
 * Define component
 */

function Signin() {
  return (
    <SigninStyle>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-5" style={{ marginTop: '80px' }}>
            <h3>Signin</h3>
          </div>
        </div>
      </div>
    </SigninStyle>
  )
}

/**
 * Export component
 */

export default Signin
