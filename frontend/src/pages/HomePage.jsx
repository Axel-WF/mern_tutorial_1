import { 
  Box, 
  VStack, 
  Text, 
  SimpleGrid, 
  //useColorModeValue 
  } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom"; // <- Asegúrate de usar react-router-dom
import { usePropertyStore } from "../store/property";
import PropertyCard from "../components/PropertyCard";

const HomePage = () => {
  const fetchProperties = usePropertyStore((state) => state.fetchProperties);
  const properties = usePropertyStore((state) => state.properties);
//  const textColor1 = useColorModeValue("gray.600", "gray.200");
//  const textColor2 = useColorModeValue("gray.500", "gray.400");

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  return (
    <Box maxW="full">
      <VStack spacing={8}>
       {/*<Text 
        fontSize={"30"} 
        fontWeight={"bold"} 
        bgGradient={`linear(to-r, ${textColor1}, ${textColor2})`} 
        bgClip={"text"} 
        textAlign={"center"} 
        textTransform={"uppercase"}>
          Nuestras propiedades!
        </Text>*/}

        <SimpleGrid
          columns={{
            base: 1,
            md: 3,
            lg: 5,
          }}
          spacing={8}
          w={"100%"}
        >
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </SimpleGrid>

        {properties.length === 0 && (
          <Text fontSize="xl" textAlign={"center"} fontWeight="bold" color={"gray.500"}>
            No hay propiedades.{" "}
            <Link to={"/create"}>
              <Text as="span" color={"red.500"} _hover={{ textDecoration: "underline" }}>
                Crea una publicación
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default HomePage;
