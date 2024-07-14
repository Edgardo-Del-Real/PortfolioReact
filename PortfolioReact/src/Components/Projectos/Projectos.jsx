import React from 'react';
import './Projectos.css'
import {Box, Center, Flex} from '@chakra-ui/react'
import contrato from '../../assets/contrato.png'
const Projectos = () =>{
    return(
        <Box id="proyectos" className="contenedor-proyectos" mt={130}>

               <Center>      
                <h2><span className="signos">&lt;</span>Mis proyectos<span 
                class="signos">&gt;</span></h2>
                </Center>
                <Center className="contenedor-imagenes">
                    <Box as='div'><a href="https://ahdocdigitalsolutions.com/" target="_blank"><img src={contrato} class="imagen-ahdoc" alt=""/></a></Box>
                </Center>
                <Flex className="contenedor-ver-mas" aling-items='center'               justifyContent='Center'>
                    <a className="boton-ver-todos" href="">Ver todos</a>
                </Flex>
        </Box>  
    )
}

export default Projectos 