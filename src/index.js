import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Frame1 from './views/frame1'
import Frame2 from './views/frame-2'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Frame1} exact path="/frame1" />
        <Route component={Frame2} exact path="/frame-2" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
