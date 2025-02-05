// import React from 'react'

import { Container, Flex, Text, HStack, Button, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { LuSun, LuMoon } from "react-icons/lu";




const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>

      <Flex 
        h={ 16 } 
        alignItems={ "center" } 
        justifyContent={ "space-between" } 
        flexDir={{ base: "column", sm: "row" }}>
        <Text 
          bgGradient={ "linear(to-r, pink.400, red.500)" }
          bgClip={"text"} 
          fontSize={{ base: "22", sm: "28" }} 
          ontWeight={"bold"} 
          textTransform={"uppercase"} 
          textAlign={"center"}>

            <Link to="/">Portal TeamHouseSelect</Link>

        </Text>

        <HStack spacing={2} alignItems={"center"}>
          
            <Button>

              <Link to={"/create"}>
              <CiSquarePlus fontSize={20}/>
              </Link>

            </Button>

            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <LuMoon /> : <LuSun /> }
            </Button>

        </HStack>

      </Flex>

    </Container>
  )
}

export default Navbar