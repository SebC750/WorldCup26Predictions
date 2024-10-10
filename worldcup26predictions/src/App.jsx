import { useState } from 'react'

import './App.css'
import Navbar from "./Components/Navbar.jsx"
import LegendTable from "./Components/LegendTable.jsx"
import BracketTable from "./Components/BracketTable.jsx"
function App() {
  
  return (
    <div className="bg">
      <div className="content">
      <Navbar />
      <div className="intro">
        <h1> Welcome to the World Cup Prediction Bracket!</h1>
        <p> Create your own simulations of the FIFA World Cup 2026 brackets!</p>
      </div>

      <LegendTable />
      <BracketTable/>
      </div>
      
    </div>
  )
}

export default App
