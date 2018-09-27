import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import NavBar from '../nav'
import Projects from '../projects'

const App = () => (

  <div>
    <NavBar />
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-mere">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-mere" component={About} />
      <Route exact path="/projects" component={Projects} />
    </main>

  </div>
)

export default App
