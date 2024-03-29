import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Login from "./pages/Login";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Login />
      </Box>
    </Container>
  );
}
