import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NavBar from './Components/NavBar/NavBar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Projectos from './Components/Projectos/Projectos.jsx'
import QueHago from './Components/QueHago/QueHago.jsx'
import Formulario from './Components/Formulario/Formulario.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import AboutMe from './Components/AboutMe/AboutMe.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <NavBar/>
      <Hero/>
      <Projectos/>
      <AboutMe/>
      <QueHago/>
      <Formulario/>
      <Footer/>
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
)
