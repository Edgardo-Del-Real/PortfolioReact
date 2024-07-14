import React from 'react';
import './Formulario.css'
import { Box, Button, ButtonGroup, Center, Flex, Spacer } from '@chakra-ui/react'
const Formulario = () =>{
    return(
    <form  id="formulario" className="contenedor-formulario">
        <Flex justifyContent='center' flexWrap='wrap'>
            <h2 className="titulo"><span className="signos">&lt;</span>Contactos<span className="signos">&gt;</span></h2>
                <Box as='section' className="formulario" >
                    <Flex justifyContent='space-evenly' alignItems='center'    flexWrap='wrap'>
                        <Box as='section' className="contenedor-info">
                            <Flex alignItems='center' justifyContent='space-around'>
                                <Box as='div' className="info">
                                    <h3>Telefono</h3>
                                    <h3>Direccion</h3>
                                    <h3>Email</h3>
                                </Box>    
                                <Box as='div' className="info-detallada">
                                    <h3>+54 3447491803</h3>
                                    <h3>Colon Entre Ríos, Argentina</h3>
                                    <h3>edgardodelreal@gmail.com</h3>
                                </Box>
                            </Flex>
                        </Box>

                        <Box as='section' className="contenedor-inputs">
                            <Flex justifyContent='space-between' flexWrap='wrap'>
                                <Box as='section' className="inputs">
                                    <Flex flexDirection='column'>
                                        <input className="texto" placeholder="Nombre" type="text" name="" id=""/>
                                        <input className="email" placeholder="Email" type="email" name="" id=""/>
                                        <textarea className="parrafo" placeholder="Mensaje" name="parrafo" id=""></textarea>
                                        <Flex justifyContent='right'>
                                            <Box as='div' className="boton-enviar">
                                                <button className="enviar" href="">Enviar</button>
                                            </Box>
                                        </Flex>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
        </Flex>
    </form>
    )
}

export default Formulario 