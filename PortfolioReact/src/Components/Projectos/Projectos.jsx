import React from 'react';
import './Projectos.css'
import {Box, Center, Flex, Text, Link, Image, Button} from '@chakra-ui/react'
import contrato from '../../assets/contrato.png'
const Projectos = () =>{
    return(
        <Box id="proyectos" className="contenedor-proyectos" mt='240px' fontFamily='Arial'>

               <Center>      
                <Text as='h2' 
                fontSize='40px' 
                color='#f7f6fb' 
                mb='100px'>
                        <Text as='span' className="signos">
                            &lt;
                        </Text>
                        Mis proyectos
                        <Text as='span' 
                            class="signos">&gt;
                        </Text>
                </Text>

                </Center>
                    <Center className="contenedor-imagenes" >
                        <Box as='div' h='350px' w='350px' borderRadius='20px' >
                                <Link href="https://ahdocdigitalsolutions.com/" 
                                    target="_blank" textDecoration='none'>
                                        <Image src={contrato}  
                                        alt=""
                                        w='100%' h='100%'
                                        borderRadius='20px'
                                        filter='grayscale(100%) blur(2px)' 
                                        transition='1s'
                                        _hover={{filter: 'grayscale(0%) blur(0px)'}}
                                        />
                                </Link>
                        </Box>
                    </Center>
                <Flex className="contenedor-ver-mas" 
                    aling-items='center'               
                    justifyContent='Center'
                    mt='80px'>
                        <Center>
                            <Button textAlign='center' 
                                border='4px solid' 
                                borderRadius='25px' 
                                p='40px' 
                                fontSize='25px' 
                                fontWeight='bold' 
                                color='#282a36' 
                                background='#bd93f9' 
                                transition='1s' 
                                cursor='pointer' 
                                _hover={{color:'#bd93f9', bg:'#282a36', border:'4px solid'}}>
                                Ver todos
                            </Button>
                        </Center>
                </Flex>
        </Box>  
    )
}

export default Projectos 