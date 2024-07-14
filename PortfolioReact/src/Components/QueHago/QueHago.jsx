import React from 'react';
import './QueHago.css';
import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png'
import {Box, Center, Flex} from '@chakra-ui/react'
const QueHago = () =>{
    return(
        <Box className="que-hago">
                <Flex justifyContent='center' alignItems='center' flexWrap='wrap'>
                <h2><span className="signos">&lt;</span>¿Que hago?<span className="signos">&gt;</span></h2>
                <Box as='section' className="card-desarrollo-web">
                    <Box as='section' className="contenedor-card1">
                        <img src={pic1} alt=""/>
                        <h2 className="titulo-card">Desarrollo Web</h2>
                    </Box>
                </Box>
                <Box as='section' className="card-desarrollo-software">
                    <Box as='section' className="contenedor-card2">
                        <img src={pic2} alt=""/>
                        <h2 className="titulo-card">Desarrollo Softaware</h2>
                    </Box>  
                </Box>
                </Flex>
        </Box>
    )
}

export default QueHago