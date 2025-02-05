import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom"; // <- Asegúrate de usar react-router-dom
import { usePropertyStore } from "../store/property";
import PropertyCard from "../components/PropertyCard";

const HomePage = () => {
  const { fetchProperties, properties } = usePropertyStore();

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, pink.400, red.500)"}
          bgClip={"text"}
          textAlign={"center"}
          textTransform={"uppercase"}
        >
          Nuestras propiedades!
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
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
    </Container>
  );
};

export default HomePage;
