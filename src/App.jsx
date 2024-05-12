import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Text, Container } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
      <Box as="footer" width="full" p={4} bg="brand.800" color="white" textAlign="center">
        <Container maxW="container.md">
          <Text>© 2023 Todo App, Inc.</Text>
          <Text mt={2}>More links coming soon...</Text>
        </Container>
      </Box>
    </Router>
  );
}

export default App;