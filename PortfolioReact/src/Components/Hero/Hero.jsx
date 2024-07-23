import React from 'react';
import './Hero.css'
import { Box, Button, ButtonGroup, Center, Flex, Spacer, Text, Image, Link, Icon } from '@chakra-ui/react'
import foto_mia from '../../assets/foto_mia.png'
import 'bootstrap-icons/font/bootstrap-icons.css'


const Hero = () =>{


    return(
    <Box as='section' className="contenedor-hero" fontWeight='bold' pl={30} pr={30} fontFamily='Arial'>

        <Flex w='100%' className="contenedor-foto-texto" mt={20}>
            <Center className="hi" 
            pt='20px' 
            flexWrap='wrap'>
                <Text as='h1' 
                color='#f7f6fb' 
                fontSize='3rem' 
                w='100%'>Hola,<br/>Soy Edgardo,<br/>
                    <Text as='span' 
                        color='#ff79c6'>
                        Desarrollador web
                    </Text>
                </Text>
                <Text as='p' className='textoDeAbajo' 
                    color='#5b6379' 
                    fontSize='1rem' 
                    transform={'translate(-205px, -80px)'}>
                    Front End Developer / C# / Java / React
                </Text>
            </Center>
            
            <Spacer/>

            <Center className="imagen-mia" mr={20}>
                <Image width={400} 
                height={400}  
                src={foto_mia} 
                alt="" 
                border='2px solid' 
                borderRadius='20px 20px'/>
            </Center>
        </Flex>
        <ButtonGroup gap={15} 
        className="contenedor-botones" 
        w='450px' 
        height='90px' 
        transform='translateY(-90px)'>

            <Button  textAlign='center' 
            border='4px solid' 
            width='50%'
            borderRadius='25px' 
            p='40px'
            fontSize='25px'
            fontWeight='bold'
            color='#282a36' 
            background='#bd93f9' 
            transition='1s'
            cursor='pointer' 
            _hover={{color:'#bd93f9', bg:'#282a36'}}>
            Mis trabajos
            </Button>


            <Button textAlign='center' 
            border='4px solid' 
            width='50%' 
            borderRadius='25px' 
            p='40px' 
            fontSize='25px' 
            fontWeight='bold' 
            color='#282a36' 
            background='#bd93f9' 
            transition='1s' 
            cursor='pointer' 
            _hover={{color:'#bd93f9', bg:'#282a36'}}>
            Contratarme
            </Button>
        </ButtonGroup>

        <ButtonGroup className="contenedor-linea-redes" fontSize='50px' transform='translate(-457px, 100px)'>

            <Flex justifyContent='center' 
            flexDirection='column' 
            alignItems='center'>
                <Box as='div' 
                    className="linea" 
                    w='2px' 
                    h='80px' 
                    bg='#6b78a3' 
                    mb='10px'>
                </Box>

                <Flex className="redes" 
                flexDirection='column'> 
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
                </Flex> 
            </Flex>
        </ButtonGroup>
    </Box>
    )
}

export default Hero 