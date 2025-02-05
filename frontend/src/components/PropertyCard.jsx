
import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { Box, Button, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from "@chakra-ui/react"
import { usePropertyStore } from "../store/property"
import { useState } from "react"

const PropertyCard = ({property}) => {

    const [ updatedProperty, setUpdatedProperty] = useState(property)

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bgColor = useColorModeValue("white", "gray.800");



    const { deleteProperty, updateProperty } = usePropertyStore();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDeletePorperty = async (pid) => {
        const { success, message } = await deleteProperty(pid);
        if (!success) {
            toast({
                description: message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            console.log(message)
            console.log(usePropertyStore.getState().properties);
        } else {
            toast({
                description: message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            console.log(message)
            console.log(usePropertyStore.getState().properties);
        }
    };

    const handleUpdateProperty = async ( pid, updatedProperty ) => {
        const {success, message} = await updateProperty(pid, updatedProperty);
        onClose();

        if (!success) {
            toast({
                description: message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            console.log(message)
            console.log(usePropertyStore.getState().properties);
        } else {
            toast({
                description: message,
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            console.log(message)
            console.log(usePropertyStore.getState().properties);
        }
    };

    return (
    <Box
    shadow='lg'
    rounded='lg'
    overflow={"hidden"}
    transition={"all 0.3s"}
    _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    bg={bgColor}>

        <Image src={property.image} alt={property.name} h={48} w={"full"} objectFit={"cover"}/>

        <Box p={4}>

            <Heading as={"h3"} size={"md"} mb={2}>
                {property.name}
            </Heading>

            <Text fontWeight={"bold"} fontSize={"xl"} mb={4} color={textColor}>
                {property.price} UF
            </Text>

            <HStack>
                <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue"/>
                <IconButton icon={<DeleteIcon />} onClick={() => handleDeletePorperty(property._id)} colorScheme="red"/>
            </HStack>

        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

            <ModalContent>

                <ModalHeader> Editar Propiedad </ModalHeader>

                <ModalCloseButton />

                <ModalBody>

                    <VStack spacing={4}>

                        <Input 
                        placeholder="Título de la publicación"
                        name="name"
                        value={updatedProperty.name}
                        onChange={(e) => setUpdatedProperty({ ...updatedProperty, name: e.target.value })}/>

                        <Input 
                        placeholder="Precio de la propiedad"
                        name="price"
                        value={updatedProperty.price}
                        onChange={(e) => setUpdatedProperty({ ...updatedProperty, price: e.target.value })}/>

                        <Input 
                        placeholder="URL de la imagen principal"
                        name="image"
                        value={updatedProperty.image}
                        onChange={(e) => setUpdatedProperty({ ...updatedProperty, image: e.target.value })}/>

                    </VStack>

                </ModalBody>

                <ModalFooter>

                    <Button colorScheme={"blue"} onClick={() => handleUpdateProperty(property._id, updatedProperty)} mr={3}>Actualizar</Button>
                    <Button variant={'ghost'} onClick={onClose}>Cerrar</Button>

                </ModalFooter>

            </ModalContent>


        </Modal>

    </Box>
  )
}

export default PropertyCard