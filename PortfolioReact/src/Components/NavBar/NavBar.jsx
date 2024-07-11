import React from 'react';
import './NavBar.css'
import { Box, ButtonGroup, Center, Flex, Spacer } from '@chakra-ui/react'
import logosinfondo from '../../assets/logosinfondo.png'
import { px } from 'framer-motion';
const NavBar = () =>{
    return(
    <Box as='header' w='100%' h='140px'>
            <Flex>
                <Center pl={30}>
                    <img className='logo' src={logosinfondo} alt="" />  
                    <h2><span className="letraE">E</span>DGARDO</h2>
                </Center>
                <Spacer />
                <Center className='menu' pr={45} >
                    <ButtonGroup gap={10} >
                    <a href="">HOME</a>
                    <a href="">PORTFOLIO</a>
                    <a href="#about-me">RESUME</a>
                    </ButtonGroup>
                </Center>
                <Box as='div' className="boton-desplegable">
                    <i className="Li bi-list"></i>
                </Box>
            </Flex>
    </Box>
    )
}

export default NavBar 