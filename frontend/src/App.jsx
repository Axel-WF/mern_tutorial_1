import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react"
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <Box minH="100vh"  bg={useColorModeValue("gray.200","gray.700")}>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/create" element={<CreatePage />}/>
        </Routes>
        <Footer />
    </Box>

  )
}

export default App
