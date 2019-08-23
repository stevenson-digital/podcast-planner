import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import EpisodeDetails from './components/episodes/EpisodeDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateEpisode from './components/episodes/CreateEpisode'
import ForgotPassword from './components/auth/ForgotPassword'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/episode/:id' component={EpisodeDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateEpisode} />
            <Route path='/forgot-password' component={ForgotPassword} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
