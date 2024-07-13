import React from 'react';
import './Projectos.css'
import {Box, Center} from '@chakra-ui/react'
import contrato from '../../assets/contrato.png'
const Projectos = () =>{
    return(
        <Box id="proyectos" className="contenedor-proyectos">

               <Center>      
                <h2><span className="signos">&lt;</span>Mis proyectos<span 
                class="signos">&gt;</span></h2>
                </Center>
                <Center className="contenedor-imagenes">
                    <Box as='div'><a href="https://ahdocdigitalsolutions.com/" target="_blank"><img src={contrato} class="imagen-ahdoc" alt=""/></a></Box>
                </Center>
                <Center className="contenedor-ver-mas">
                    <a className="boton-ver-todos" href="">Ver todos</a>
                </Center>
            </Box>  
    )
}

export default Projectos 