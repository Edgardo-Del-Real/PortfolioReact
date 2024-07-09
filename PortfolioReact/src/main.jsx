import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './Components/NavBar/NavBar.jsx'
import Hero from './Components/Hero/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <Hero/>
    <App />
  </React.StrictMode>,
)
