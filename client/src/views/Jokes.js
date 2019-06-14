/**
 * Dependencies
 */

import React from 'react'
import { JokesStyle } from './styles/index'

/**
 * Define component
 */

function Jokes() {
  return (
    <JokesStyle>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-5" style={{ marginTop: '80px' }}>
            <h3>Jokes</h3>
          </div>
        </div>
      </div>
    </JokesStyle>
  )
}

/**
 * Export component
 */

export default Jokes
