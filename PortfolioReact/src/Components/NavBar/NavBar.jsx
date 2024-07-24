import React from 'react';
import './NavBar.css'
import { Box, ButtonGroup, Center, Flex, Spacer, Image, Text, Link, Icon } from '@chakra-ui/react'
import logosinfondo from '../../assets/logosinfondo.png'
import { Link as ScrollLink } from "react-scroll"
const NavBar = () =>{
    return(
    <Box as='header' w='100%' h='140px' pt='10px' bg='#282a36'>
            <Flex>
                <Center pl={30}>
                    <Image className='logo' src={logosinfondo} alt="" cursor='pointer' h='100px' w='100px'/>
                    <Text as='h2' cursor='pointer' color='#f7f6fb' fontWeight='lighter' fontSize='25px'><Text as='span' className="letraE" color='#bd93f9' fontSize='40px' fontWeight='lighter'>E</Text>DGARDO</Text>
                </Center>
                <Spacer />
                <Center className='menu' pr={45} >
                    <ButtonGroup gap={10} >
                        <Link href="" color='#f7f6fb' fontSize='20px' transition='1s' _hover={{color:'#bd93f9'}}>HOME</Link>
                        <Link href="" color='#f7f6fb' fontSize='20px' transition='1s' _hover={{color:'#bd93f9'}}>PORTFOLIO</Link>
                       <ScrollLink to='aboutme' smooth={true} offset={-100} duration={900} ><Link href="#about-me" color='#f7f6fb' fontSize='20px' transition='1s' _hover={{color:'#bd93f9'}}>RESUME</Link></ScrollLink> 
                    </ButtonGroup>
                </Center>
                <Box as='div' className="boton-desplegable">
                    <Box as='Icon' className="Li bi-list" display='none'></Box>
                </Box>
            </Flex>
    </Box>
    )
}

export default NavBar 