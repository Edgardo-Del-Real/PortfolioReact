import React from 'react';
import './Formulario.css'
import { Box, Button, ButtonGroup, Center, Flex, Input, Spacer, Text, Textarea, Alert, AlertIcon } from '@chakra-ui/react'
import { Element } from 'react-scroll';
import {Formik} from 'formik'
import * as Yup from 'yup'
const Formulario = () =>{
    return(     

    <Formik initialValues={{
        apynom:'',
        email:'',
        parrafo:''
    }}

    validationSchema={Yup.object({
        apynom:Yup
        .string()
        .required('Debe ingresar su Nombre y Apellido'),
        email:Yup
        .string()
        .required('Debe ingresar una dirección de correo')
        .email('La dirección de correo debe ser valida'),
    })}

    onSubmit={(values)=>{
        console.log(values)
    }}>
    {({
        values,
        handleChange,
        handleSubmit,
        errors

    })=>(  
    <Element name='formulario'>
    <Box as='form' onSubmit={handleSubmit} 
    id="formulario" 
    className="contenedor-formulario" 
    fontFamily='Arial' 
    p='30px' 
    bg='#282a36'>
        <Flex justifyContent='center' 
        flexWrap='wrap'>
            <Text as='h2' 
                className="titulo" 
                w='100%' 
                textAlign='center' 
                fontSize='40px'
                mb='100px' 
                mt='250px' 
                color='#f7f6fb'>
                    <span className="signos">
                        &lt;
                        </span>Contactos<span 
                        className="signos">
                            &gt;
                            </span>
            </Text>
                <Box as='section' 
                className="formulario" 
                p='20px' 
                w='100%' 
                borderRadius='25px' 
                boxShadow='1px 1px 15px rgba(0.5, 0.5, 0.5, 0.5)' 
                bg='#34394c' >
                    <Flex justifyContent='space-evenly' 
                    alignItems='center' 
                    flexWrap='wrap'>
                        <Box as='section' 
                        className="contenedor-info" 
                        mb='250px' 
                        w='50%'>
                            <Flex alignItems='center' 
                            justifyContent='space-around'>
                                <Box as='div' 
                                className="info" 
                                w='30%' 
                                fontFamily='Arial' 
                                p='10px' 
                                pr='50px' 
                                color='#f7f6fb'>
                                    <Text as='h3' p='10px' fontSize='25px' mb='40px'>Telefono</Text>
                                    <Text as='h3' p='10px' fontSize='25px' mb='40px'>Direccion</Text>
                                    <Text as='h3' p='10px' fontSize='25px' mb='40px'>Email</Text>
                                </Box>    
                                <Box as='div' 
                                className="info-detallada" 
                                w='70%' 
                                fontFamily='Arial' 
                                p='10px' 
                                pr='50px' 
                                color='#c094f9' 
                                textAlign='right'>
                                    <Text as='h3' p='10px' fontSize='25px' mb='40px'>+54 3447491803</Text>
                                    <Text as='h3' p='10px' fontSize='25px' mb='40px'>Colon Entre Ríos, Argentina</Text>
                                    <Text as='h3' p='10px' fontSize='25px' mb='40px'>edgardodelreal@gmail.com</Text>
                                </Box>
                            </Flex>
                        </Box>

                        <Box as='section' 
                        className="contenedor-inputs" 
                        w='45%'>
                            <Flex justifyContent='space-between' 
                            flexWrap='wrap'>
                                <Box as='section' 
                                className="inputs" 
                                w='100%'
                                >
                                    <Flex flexDirection='column' >
                                        <Input className="texto" 
                                        placeholder="Nombre" 
                                        type="text" 
                                        name="apynom" 
                                        id="apynom" 
                                        w='90%' 
                                        fontSize='25px' 
                                        mb='20px' 
                                        p='35px' 
                                        borderRadius='25px' 
                                        bg='#34394c' 
                                        textDecoration='none' 
                                        _placeholder={{color:'#6473a3', fontWeight:'bolder', textAlign:'initial'}} color='#6473a3' 
                                        border='4px #6473a3 solid'
                                        value={values.apynom}
                                        onChange={handleChange}/>   
                                        {errors.apynom?
                                        <Alert mb='20px' status='error' variant='top-accent' borderRadius='md' w='90%' alignItems='center' display='flex' justifyContent='center'>
                                        <AlertIcon/>
                                        {errors.apynom}
                                        </Alert>:null}

                                        <Input className="email" 
                                        placeholder="you@example.com" 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        w='90%' 
                                        fontSize='25px' 
                                        mb='20px'
                                        p='35px' 
                                        borderRadius='25px' 
                                        bg='#34394c' 
                                        _placeholder={{color:'#6473a3', fontWeight:'bolder', textAlign:'initial'}} color='#6473a3' 
                                        border='4px #6473a3 solid'
                                        value={values.email}
                                        onChange={handleChange}/>
                                         {errors.email?
                                        <Alert mb='20px' status='error' variant='top-accent' borderRadius='md' w='90%' alignItems='center' display='flex' justifyContent='center'>
                                        <AlertIcon/>
                                        {errors.email}
                                        </Alert>:null}

                                        <Textarea className="parrafo" 
                                        placeholder="Mensaje" 
                                        name="parrafo" 
                                        id="parrafo" 
                                        color='#6473a3' 
                                        border='4px #6473a3 solid' 
                                        _placeholder={{fontSize:'25px', color:'#6473a3', fontWeight:'bolder'}} 
                                        p='25px' 
                                        fontSize='25px' 
                                        bg='#34394c' 
                                        borderRadius='25px' 
                                        maxH='200px' 
                                        maxW='90%' 
                                        minW='90%' 
                                        minH='200px'
                                        value={values.parrafo}
                                        onChange={handleChange}>
                                        </Textarea>

                                        <Flex justifyContent='right' 
                                        mt='80px' 
                                        mr='40px'>
                                        <Button 
                                            border='4px solid' 
                                            borderRadius='25px' 
                                            p='40px' 
                                            fontSize='25px' 
                                            fontWeight='bold' 
                                            color='#282a36' 
                                            background='#bd93f9' 
                                            transition='1s' 
                                            cursor='pointer' 
                                            _hover={{color:'#bd93f9', bg:'#282a36', border:'4px solid'}}
                                            mr='15px'
                                            textAlign='right'
                                            type='submit'>
                                            Enviar
                                        </Button>
                                        </Flex>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
        </Flex>
    </Box>
    </Element>
    )}
    </Formik>
    )
}

export default Formulario 