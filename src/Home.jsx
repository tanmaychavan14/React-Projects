import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <main className='Home-main'>
    <div className="home-container">
         <div className="calculator-box">
         <Link to="/Calculator"><h1 className='home-h1'>Calculator</h1></Link>
      </div>
      <div className="weather-box">
         <Link to="/Weather"><h1 className='home-h1'>Weather</h1></Link>
      </div>
    </div></main>
  )
}

export default Home
