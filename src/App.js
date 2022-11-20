import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Team from './components/team/Team'
import Home from './Home'
import Signin from './server/signin/Signin'
import Signup from './server/signup/Signup'
import Pricing from './components/pricing/Pricing'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  )
}

export default App
