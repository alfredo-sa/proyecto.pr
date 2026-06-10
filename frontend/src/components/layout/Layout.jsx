import { Box, Container } from "@mui/material";
import Navbar from "./Navbar.jsx";

export default function Layout({ children }) {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
        {children}
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          textAlign: "center",
          color: "text.secondary",
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} ClassUP — Todos los derechos reservados.
      </Box>
    </Box>
  );
}
