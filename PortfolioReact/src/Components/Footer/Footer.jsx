import React from 'react';
import './Footer.css'
import {Box, Flex, Center, Spacer, Link, Image, Text, Icon} from '@chakra-ui/react'
import logosinfondo from '../../assets/logosinfondo.png'
import {Link as ScrollLink} from 'react-scroll'
const Footer = () =>{
    return(
        <Box>
            <ScrollLink to='hero' smooth={true} offset={-400} duration={900}><Flex className="arriva-footer" justifyContent='end'>
                <Link href="#arriva" className="arriva" mt='10px' mr='30px'><Box as='i' className="si bi-arrow-up-circle-fill" color='#625783' fontSize='40px' transition='0.5s' _hover={{color:'#bd93f9'}}></Box></Link>
            </Flex></ScrollLink>
            <Box as='footer' className="footer" fontFamily='Arial' p='10px' >
            <Flex justifyContent='center' alignItems='center'>
                <Box as='section' className="contenedor-footer" w='95%' borderBottom='#6b78a3 solid'>
                    <Flex alignItems='center' justifyContent='space-between'>
                    <Box as='div' className="logo-nombre-footer">
                    <Center>
                        <Image className='logo' src={logosinfondo} alt="" cursor='pointer' h='100px' w='100px'/>
                        <Text as='h2' cursor='pointer' color='#f7f6fb' fontWeight='lighter' fontSize='25px'><Text as='span' className="letraE" color='#bd93f9' fontSize='40px' fontWeight='lighter'>E</Text>DGARDO</Text>
                    </Center>
                    </Box>
                    <nav className="menu-footer">
                    <ScrollLink to='hero' smooth={true} offset={-400} duration={900}><Link p='15px' textDecoration='none' color='#f7f6fb' fontSize='20px' transition='1s' _hover={{color:'#bd93f9'}}>HOME</Link></ScrollLink>
                    <ScrollLink to='hero' smooth={true} offset={-400} duration={900}><Link p='15px' textDecoration='none' color='#f7f6fb' fontSize='20px' transition='1s' _hover={{color:'#bd93f9'}}>PORTFOLIO</Link></ScrollLink>
                        <Link p='15px' textDecoration='none' color='#f7f6fb' fontSize='20px' transition='1s' _hover={{color:'#bd93f9'}}>RESUME</Link>
                        <ScrollLink to='aboutme' smooth={true} offset={-150} duration={900}><Link p='15px' textDecoration='none' color='#f7f6fb' fontSize='20px' transition='1s' _hover={{color:'#bd93f9'}}>SOBRE MI</Link></ScrollLink>
                    </nav>

                        <Flex alignItems='center'>
                        <Box as='section' className="redes-footer" p='20px' mr='10px' display='flex' color='#6b78a3' fontSize='30px' alignItems='center'>  
                        <Link href="https://www.instagram.com/edgardelreal1/" 
                    title="Instagram" 
                    target="_blank">
                            <Box as='i' 
                                className="bi bi-instagram" 
                                fontSize='30px' 
                                p='10px' 
                                color='#6b78a3'  
                                transition='0.5s' 
                                _hover={{color:'#ff3140'}}>                    
                            </Box>
                    </Link>

                    <Link href="https://www.linkedin.com/in/edgardo-del-real-27b24a27a/" 
                    title="LinkedIn" 
                    target="_blank">
                        <Box as='i' 
                            className="bi bi-linkedin" 
                            fontSize='30px' 
                            p='10px' 
                            color='#6b78a3' 
                            transition='0.5s'
                            _hover={{color:'#0b65c3'}}>
                        </Box>
                    </Link>

                    <Link href="https://github.com/Edgardo-Del-Real" 
                    title="GitHub" 
                    target="_blank">
                        <Box as='i' 
                            className="bi bi-github" 
                            fontSize='30px'
                            p='10px' 
                            color='#6b78a3' 
                            transition='0.5s' 
                            _hover={{color:'#e6edf3'}}>
                        </Box>
                    </Link>
                        </Box>
                        </Flex>
                    </Flex>
                </Box>
                </Flex>
            </Box>
            <Flex className="copy" textAlign='center' fontFamily='Arial' color='#f7f6fb' p='0 45px'>
                <Text as='p'>© 2024 edgardodelreal@gmail.com</Text>
                    <Spacer/>
                <Text as='p'>Creado por Edgardo Del Real</Text>
            </Flex>
            </Box>
    )
}

export default Footer 