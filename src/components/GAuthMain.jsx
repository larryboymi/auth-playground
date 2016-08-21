import React from 'react'
import {Link} from 'react-router'

module.exports = (props) => (
  <div id="gauth" className="container">
    <div>
      <Link to="/firebase/popup">Google Firebase Authentication Popup</Link>
      <br/>
      <Link to="/firebase/redirect">Google Firebase Authentication Redirect</Link>
    </div>
    <br/>
    {props.children}
  </div>
)
