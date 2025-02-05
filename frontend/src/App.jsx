import { Box, HStack, VStack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react"
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav.jsx";
import Footer from "./components/Footer";

function App() {

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.200","gray.700")}>
      <Navbar />
      <VStack alignItems={"center"} justify={"space-between"}>
          <HStack maxH={"100vh"} flexDir={{ base: "column", sm: "row" }} justifyContent={"left"} alignItems={"top"}>
            <Sidenav />
              <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/create" element={<CreatePage />}/>
              </Routes>   
          </HStack>
          <Footer />
        </VStack>   
    </Box>

  )
}

export default App
