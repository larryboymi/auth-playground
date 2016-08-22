import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import GAuthPopup from './components/GAuthPopup.jsx'
import Nav from './components/Nav.jsx'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Nav}>
      <Route path="/firebase/popup" component={GAuthPopup}/>
      <Route path="/firebase/redirect" component={GAuthPopup}/>
    </Route>
  </Router>, document.getElementById('main'))
