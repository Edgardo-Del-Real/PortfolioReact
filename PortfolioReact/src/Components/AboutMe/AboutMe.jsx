import React from 'react';
import './AboutMe.css'
import foto2 from '../../assets/foto2.jpg'
import { Box, Button, ButtonGroup, Center, Flex, Spacer, Image, Text, Link } from '@chakra-ui/react'
const AboutMe = () =>{

    let AbrirCV = () => {
    window.open('https://drive.google.com/file/d/16vWlo4ecdnZQPmbKd7sMbbhSxpvx1n1J/view?usp=drive_link', '_blank');
    }
    
    return(
    <Box as='section' id="about-me" className="about-me" w='100%' mt='240px' fontFamily='Arial'>
        <Box as='section' className="contenedor-about-me" textAlign='center' p='20px'>
            <Flex flexWrap='wrap' alignItems='center' justifyContent='space-evenly' >
                <Box as='div' 
                    className="imagen-" 
                    borderRadius='30px 0px'>
                        <Box as='div' 
                            className="borde" 
                            border='#6372a3 solid' 
                            borderWidth='4px' 
                            h='400px' 
                            w='600px' 
                            borderRadius='30px 0px'>
                                <Image src={foto2} 
                                alt="imagen-mia" 
                                h='400px' 
                                w='600px' 
                                borderRadius='30px 0px' 
                                transform={'translate(-20px, -30px)'} 
                                filter='brightness(80%)'/>
                    </Box>
                </Box>
                <Box as='section' 
                    className="contenedor-texto-boton" 
                    color='#f7f6fb' 
                    w='40%' 
                    pb='20px'>
                        <Flex flexWrap='wrap' 
                            textAlign='left'>
                                <Center>
                                    <Text as='h2' 
                                        fontSize='40px'>
                                            <Text as='span' 
                                            className="signos">&lt;
                                            </Text>
                                                Sobre mi
                                            <Text as='span' 
                                                class="signos">
                                                &gt;
                                            </Text>
                                    </Text>
                            </Center> 
                                <Text as='p' 
                                    className="texto-SobreMi" 
                                    h='250px' 
                                    fontSize='1.15rem' 
                                    fontWeight='bolder'>
                                        Soy Edgardo Del Real, actual estudiante de Ingeniería en Sistemas de la Información y en estos momentos estoy realizando un curso Full Stack con el fin de mejorar y adquirir nuevos conocimientos.<br/> <br/>
                                        Fuera del ámbito académico, disfruto haciendo deporte, escuchando música y tomando mates. Estas actividades me ayudan a mantener un equilibrio entre el estudio y el ocio, permitiéndome recargar energías y mantenerme enfocado.
                                </Text>
                                <ButtonGroup className="contenedor-boton-cv" 
                                    mt='30px'>
                                    <Button onClick={AbrirCV}  textAlign='center' 
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
                                            Descargar CV
                                    </Button>
                                </ButtonGroup>
                        </Flex>
                </Box>
            </Flex>
         </Box>
    </Box>
    )
}

export default AboutMe 