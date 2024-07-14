import React from 'react';
import './Footer.css'
import {Box, Flex, Center, Spacer} from '@chakra-ui/react'
import logosinfondo from '../../assets/logosinfondo.png'
const Footer = () =>{
    return(
        <Box>
            <Flex className="arriva-footer" justifyContent='end'>
                <a href="#arriva" className="arriva"><i class="si bi-arrow-up-circle-fill"></i></a>
            </Flex>
        <footer className="footer">
            <Flex justifyContent='center' alignItems='center'>
                <Box as='section' className="contenedor-footer">
                    <Flex alignItems='center' justifyContent='space-between'>
                    <Box as='div' className="logo-nombre-footer">
                        <Center>
                        <img src={logosinfondo}/>
                        <h2><span className="letraE">E</span>DGARDO</h2>
                        </Center>
                    </Box>
                    <nav className="menu-footer">
                        <a href="#arriva">HOME</a>
                        <a href="#arriva">PORTFOLIO</a>
                        <a href="#arriva">RESUME</a>
                        <a href="#about-me">SOBRE MI</a>
                    </nav>

                        <Flex alignItems='center'>
                        <Box as='section' className="redes-footer">  
                            <a href="https://www.instagram.com/edgardelreal1/" title="Instagram" target="_blank"><i class="bi2 bi-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/edgardo-del-real-27b24a27a/" title="LinkedIn" target="_blank"><i class="bi2 bi-linkedin"></i></a>
                            <a href="https://github.com/Edgardo-Del-Real" title="GitHub" target="_blank"><i class="bi2 bi-github"></i></a>
                        </Box>
                        </Flex>
                    </Flex>
                </Box>
                </Flex>
            </footer>
            <Flex className="copy" textAlign='center'>
                <p>© 2024 edgardodelreal@gmail.com</p>
                    <Spacer/>
                <p>Creado por Edgardo Del Real</p>
            </Flex>
            </Box>
    )
}

export default Footer 