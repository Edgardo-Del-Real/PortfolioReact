import React from 'react';
import './Hero.css'
import { Box, Button, ButtonGroup, Center, Flex, Spacer } from '@chakra-ui/react'
import foto_mia from '../../assets/foto_mia.png'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Hero = () =>{
    return(
    <Box as='section' className="contenedor-hero" fontWeight='bold' pl={30} pr={30}>

        <Flex w='100%' className="contenedor-foto-texto" mt={20}>
            <Center className=  "hi">
                <h1>Hola,<br/>Soy Edgardo,<br/><span>Desarrollador web</span></h1>
                <p>Front End Developer / C# / Java / React</p>
            </Center>
            <Spacer/>
            <Center className="imagen-mia" mr={20}>
                <img width={400} height={400}  src={foto_mia} alt=""/>
            </Center>
        </Flex>
        <ButtonGroup gap={15} className="contenedor-botones">
            <button class="boton1">Mis trabajos</button>
            <button class="boton2">Contratarme</button>
        </ButtonGroup>

        <ButtonGroup className="contenedor-linea-redes">
            <div className="linea"></div>
            <Flex className="redes"> 
                <a href="https://www.instagram.com/edgardelreal1/" title="Instagram" target="_blank"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/edgardo-del-real-27b24a27a/" title="LinkedIn" target="_blank"><i className="bi bi-linkedin"></i></a>
                <a href="https://github.com/Edgardo-Del-Real" title="GitHub" target="_blank"><i className="bi bi-github"></i></a>
            </Flex> 
        </ButtonGroup>
    </Box>
    )
}

export default Hero 