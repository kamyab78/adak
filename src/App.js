import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './UI/Landing'
import Sms from './UI/Sms'
import Signup from './UI/Signup'
class App extends Component{
  render(){
    return(
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/sms' component={Sms} />
                    <Route exact path='/signup' component={Signup} />
                </Suspense>
            </Router>
    )
}
}

export default App;
