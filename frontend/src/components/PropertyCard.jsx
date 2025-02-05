import { DeleteIcon, EditIcon } from "@chakra-ui/icons"
import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue, useToast } from "@chakra-ui/react"
import { usePropertyStore } from "../store/property"

const PropertyCard = ({property}) => {


    const textColor = useColorModeValue("gray.600", "gray.200");
    const bgColor = useColorModeValue("white", "gray.800");

    const { deleteProperty } = usePropertyStore();
    const toast = useToast();

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
                <IconButton icon={<EditIcon />} colorScheme="blue"/>
                <IconButton icon={<DeleteIcon />} onClick={() => handleDeletePorperty(property._id)} colorScheme="red"/>
            </HStack>

        </Box>

    </Box>
  )
}

export default PropertyCard