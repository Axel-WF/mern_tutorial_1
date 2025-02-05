import { Container, Box, useColorModeValue, Text, VStack, Divider, Checkbox, Select } from '@chakra-ui/react'

function Sidenav() {
    const bgColor = useColorModeValue("gray.100","gray.800")
    const accentColor = useColorModeValue("gray.400", "gray.600")
    const textColor = useColorModeValue("gray.300", "gray.600")

    return (
    <Container minW={"15vw"}>

        <Box
        minW={"full"}
        shadow='lg'
        rounded='lg'
        overflow={"hidden"}
        bg={bgColor}>
            <VStack align={"left"} >

                <Text paddingTop={2} paddingLeft={3} fontWeight={700} textTransform={"uppercase"}>
                Tipo de propiedad
                </Text>
                <Divider borderColor={accentColor} borderWidth={1} mb={-2}/>
                <Box>
                    <Text _hover={{ bg: textColor, fontWeight: 500 }} p={1} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                    Casas
                    </Text>
                </Box>
                <Box>
                <Text _hover={{ bg: textColor, fontWeight: 500 }} p={1} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                Departamentos
                </Text>
                </Box>
                <Box>
                <Text _hover={{ bg: textColor, fontWeight: 500 }} p={1} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                Terrenos
                </Text>
                </Box>
                <Box>
                <Text _hover={{ bg: textColor, fontWeight: 500 }} p={1} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                Oficinas
                </Text>
                </Box>
                <Box>
                <Text _hover={{ bg: textColor, fontWeight: 500 }} p={1} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                Locales
                </Text>
                </Box>
            </VStack>
    
        </Box>
        
        <Box
        mt={2}
        minW={"full"}
        shadow='lg'
        rounded='lg'
        overflow={"hidden"}
        bg={bgColor}>
            <VStack align={"left"} >

                
                    <Text paddingTop={2} paddingLeft={3} fontWeight={700} textTransform={"uppercase"}>
                    Operación
                    </Text>
                
                <Divider borderColor={accentColor} borderWidth={1} mb={-2}/>
                <Box>
                    <Text _hover={{ bg: textColor, fontWeight: 500 }} p={2} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                    Arriendo
                    </Text>
                </Box>
                <Box>
                    <Text _hover={{ bg: textColor, fontWeight: 500 }} p={2} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                    Venta
                    </Text>
                </Box>
                <Box>
                    <Text _hover={{ bg: textColor, fontWeight: 500 }} p={2} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                    <Checkbox colorScheme='gray' borderColor={"gray"}>Compromiso de compra</Checkbox>
                    </Text> 
                </Box>

            </VStack>
    
        </Box>

        <Box
        mt={2}
        minW={"full"}
        shadow='lg'
        rounded='lg'
        overflow={"hidden"}
        bg={bgColor}>
            <VStack align={"left"} >

                
                    <Text paddingTop={2} paddingLeft={3} fontWeight={700} textTransform={"uppercase"}>
                    Características
                    </Text>
                
                <Divider borderColor={accentColor} borderWidth={1} mb={-2}/>
                <Box>
                    <Select placeholder='Número de dormitorios' fontWeight={ 400 } textTransform={"uppercase"} borderWidth={0}>
                        <option value='1d'>1 Dormitorio</option>
                        <option value='2d'>2 Dormitorios</option>
                        <option value='3d'>3 Dormitorios</option>
                        <option value='3d'>4 Dormitorios</option>
                        <option value='3d'>5 Dormitorios</option>
                        <option value='3d'>6 o más Dormitorios</option>
                    </Select>
                </Box>
                <Box>
                <Select placeholder='Número de baños' fontWeight={ 400 } textTransform={"uppercase"} borderWidth={0}>
                        <option value='1b'>1 Baños</option>
                        <option value='2b'>2 Baños</option>
                        <option value='3b'>3 Baños</option>
                        <option value='3b'>4 Baños</option>
                        <option value='3b'>5 Baños</option>
                        <option value='3b'>6 o más Baños</option>
                    </Select>
                </Box>
                <Box>
                    <Text _hover={{ bg: textColor, fontWeight: 500 }} p={2} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                    <Checkbox colorScheme='gray' borderColor={"gray"}>Dormitorio y baño de servicio adicional (+1)</Checkbox>
                    </Text> 
                </Box>

            </VStack>
    
        </Box>

    </Container>

  )
}

export default Sidenav