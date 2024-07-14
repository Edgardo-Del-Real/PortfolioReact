import React from 'react';
import './AboutMe.css'
import foto2 from '../../assets/foto2.jpg'
import { Box, Button, ButtonGroup, Center, Flex, Spacer } from '@chakra-ui/react'
const AboutMe = () =>{
    return(
    <Box as='section' id="about-me" className="about-me">
        <Box as='section' className="contenedor-about-me">
            <Flex flexWrap='wrap' alignItems='center' justifyContent='space-evenly' >
                <Box as='div' className="imagen-">
                    <Box as='div' className="borde">
                        <img src={foto2} alt="imagen-mia"/>
                    </Box>
                </Box>
                <Box as='section' className="contenedor-texto-boton">
                <Flex flexWrap='wrap' textAlign='left'>
                    <Center>
                        <h2><span className="signos">&lt;</span>Sobre mi<span class="signos">&gt;</span></h2>
                    </Center> 
                        <p className="texto-SobreMi">
                            Soy Edgardo Del Real, actual estudiante de Ingeniería en Sistemas de la Información y en estos momentos estoy realizando un curso Full Stack con el fin de mejorar y adquirir nuevos conocimientos.<br/> <br/>
                            Fuera del ámbito académico, disfruto haciendo deporte, escuchando música y tomando mates. Estas actividades me ayudan a mantener un equilibrio entre el estudio y el ocio, permitiéndome recargar energías y mantenerme enfocado.
                        </p>
                        <ButtonGroup className="contenedor-boton-cv">
                            <a className="boton-CV" href="https://drive.google.com/file/d/11LUlWGZnHfVW30F-7R1N6utPY9xSkZEg/view" target="_blank">Descargar CV</a>
                        </ButtonGroup>
                 </Flex>
             </Box>
            </Flex>
         </Box>
    </Box>
    )
}

export default AboutMe 