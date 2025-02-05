import { Container, Box, useColorModeValue, Text, VStack, Divider } from '@chakra-ui/react'

function Sidenav() {
    const bgColor = useColorModeValue("gray.100","gray.800")
    const accentColor = useColorModeValue("gray.400", "gray.600")
    const textColor = useColorModeValue("gray.400", "gray.600")

    return (
    <Container minW={"15vw"}>

        <Box
        minW={"full"}
        minH={"30vh"}
        shadow='lg'
        rounded='lg'
        overflow={"hidden"}
        bg={bgColor}>
            <VStack align={"left"} >

                <Text paddingTop={2} paddingLeft={3} fontWeight={700} textTransform={"uppercase"}>
                Filtros de Búsqueda
                </Text>
                <Divider borderColor={accentColor} borderWidth={1}/>
                <Text _hover={{ bg: textColor }} p={2} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                Casas
                </Text>
                <Text _hover={{ bg: textColor }} p={2} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                Departamentos
                </Text>
                <Text _hover={{ bg: textColor }} p={2} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                Terrenos
                </Text>
                <Text _hover={{ bg: textColor }} p={2} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                Oficinas
                </Text>
                <Text _hover={{ bg: textColor }} p={2} paddingLeft={3} fontWeight={400} textTransform={"uppercase"}>
                Locales
                </Text>

            </VStack>
    
        </Box>

    </Container>

  )
}

export default Sidenav