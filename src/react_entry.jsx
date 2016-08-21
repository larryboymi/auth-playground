import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import GAuthMain from './components/GAuthMain.jsx'
import GAuthPopup from './components/GAuthPopup.jsx'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/firebase" component={GAuthMain}>
      <Route path="popup" component={GAuthPopup}/>
      <Route path="redirect" component={GAuthPopup}/>
    </Route>
  </Router>, document.getElementById('main'))
