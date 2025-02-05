import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import { useState } from 'react'
import { usePropertyStore } from '../store/property';

const CreatePage = () => {

  const [newProperty, setNewProperty] = useState({
    name:"",
    price:"",
    image:"",
  });

  const toast = useToast();
  const {createProperty} = usePropertyStore();

  const handleAddProperty = async () => {
    const {success, message} = await createProperty(newProperty)
    if (!success) {
      toast({
        title:"Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true
      });
    } else {
      toast({
        title: "Éxito!",
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true
      });
    }
    setNewProperty({name: "", price: "", image:""});
  };

  return <Container>
    <VStack spacing={8}>

      <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
        Agregar propiedad
      </Heading>
      
      <Box 
      w={"full"}
      bg={useColorModeValue("white","grey.800")}
      p={6}
      rounded={"lg"}
      shadow={"md"}>

        <VStack spacing={4}>

          <Input 
          placeholder='Título de la publicación'
          name='name'
          value={newProperty.name}
          onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value})}/>
          
          <Input 
          placeholder='Precio en UF'
          name='price'
          value={newProperty.price}
          onChange={(e) => setNewProperty({ ...newProperty, price: e.target.value})}/>
          
          <Input 
          placeholder='URL de la imagen principal'
          name='image'
          value={newProperty.image}
          onChange={(e) => setNewProperty({ ...newProperty, image: e.target.value})}/>
        
          <Button colorScheme='red' onClick={handleAddProperty} w='full'>
            Publicar
          </Button>
        
        </VStack>

      </Box>

    </VStack>

  </Container>
}

export default CreatePage