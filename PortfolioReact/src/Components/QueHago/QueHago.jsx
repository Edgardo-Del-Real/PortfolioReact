import React from 'react';
import './QueHago.css';
import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png'
import {Box, Center, Flex, Text, Image} from '@chakra-ui/react'
const QueHago = () =>{
    return(
        <Box className="que-hago" fontFamily='Arial' mt='240px' >
                <Flex justifyContent='center' 
                    alignItems='center' 
                    flexWrap='wrap'>
                    <Text as='h2' 
                        w='100%' 
                        textAlign='center' 
                        fontSize='40px' 
                        color='#f7f6fb' 
                        pb='35px'>
                            <Text as='span' 
                                className="signos">&lt;
                            </Text>¿Que hago?
                            <Text as='span' 
                                className="signos">&gt;
                            </Text>
                    </Text>
                    <Box as='section' 
                    className="card-desarrollo-web" 
                    boxShadow='1px 1px 15px rgba(0.5, 0.5, 0.5, 0.5)' 
                    borderRadius='20px' 
                    w='450px'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    h='350px'
                    m='15px'
                    bg='#34394c'>
                        <Box as='section' 
                            className="contenedor-card1" 
                            display='flex' 
                            flexDirection='column' 
                            w='90%' 
                            h='90%' 
                            textAlign='center' 
                            alignItems='center' 
                            justifyContent='center' 
                            bg='#34394c'>
                                <Image src={pic1} 
                                    alt="" 
                                    h='200px' 
                                    w='200px' 
                                    bg='#34394c'/>
                                <Text as='h2' 
                                    className="titulo-card" 
                                    fontSize='30px' 
                                    color='#f7f6fb' 
                                    fontWeight='lighter' 
                                    bg='#34394c'>
                                    Desarrollo Web
                                </Text>
                        </Box>
                    </Box>
                    <Box as='section'
                        className="card-desarrollo-web" 
                        boxShadow='1px 1px 15px rgba(0.5, 0.5, 0.5, 0.5)' 
                        borderRadius='20px' 
                        w='450px'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        h='350px'
                        m='15px'
                        bg='#34394c'>
                            <Box as='section' 
                                className="contenedor-card2" 
                                display='flex' 
                                flexDirection='column' 
                                w='90%' 
                                h='90%' 
                                textAlign='center' 
                                alignItems='center' 
                                justifyContent='center' 
                                bg='#34394c'>
                                    <Image src={pic2} 
                                        alt="" h='200px' 
                                        w='200px' 
                                        bg='#34394c'/>
                                    <Text as='h2' 
                                        className="titulo-card" 
                                        fontSize='30px' 
                                        color='#f7f6fb' 
                                        fontWeight='lighter' 
                                        bg='#34394c'>
                                        Desarrollo Softaware
                                    </Text>
                            </Box>  
                    </Box>
                </Flex>
        </Box>
    )
}

export default QueHago