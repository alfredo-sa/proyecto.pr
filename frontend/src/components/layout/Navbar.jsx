import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useTema } from "../../contexts/TemaContext.jsx";
import { useUsuario } from "../../contexts/UsuarioContext.jsx";

const links = [
  { to: "/", label: "Inicio", icon: <HomeIcon /> },
  { to: "/registro", label: "Inscripción", icon: <HowToRegIcon /> },
  { to: "/dashboard", label: "Dashboard", icon: <DashboardIcon /> },
];

export default function Navbar() {
  const { modo, toggleTema } = useTema();
  const { usuario, logout } = useUsuario();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout?.();
    navigate("/login");
  };

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar sx={{ gap: 2 }}>
          <SchoolIcon color="primary" />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            ClassUP
          </Typography>

          {!isMobile &&
            links.map((l) => (
              <Button
                key={l.to}
                component={Link}
                to={l.to}
                startIcon={l.icon}
                color={isActive(l.to) ? "primary" : "inherit"}
                variant={isActive(l.to) ? "outlined" : "text"}
              >
                {l.label}
              </Button>
            ))}

          <Tooltip title={modo === "light" ? "Modo oscuro" : "Modo claro"}>
            <IconButton onClick={toggleTema} color="inherit">
              {modo === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip>

          {usuario ? (
            <>
              {!isMobile && (
                <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32 }}>
                  {usuario?.nombre?.[0]?.toUpperCase() || "U"}
                </Avatar>
              )}
              {!isMobile && (
                <Button
                  onClick={handleLogout}
                  startIcon={<LogoutIcon />}
                  color="inherit"
                >
                  Salir
                </Button>
              )}
            </>
          ) : (
            !isMobile && (
              <Button
                component={Link}
                to="/login"
                variant="contained"
                startIcon={<LoginIcon />}
              >
                Iniciar sesión
              </Button>
            )
          )}

          {isMobile && (
            <IconButton onClick={() => setOpen(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {links.map((l) => (
              <ListItemButton
                key={l.to}
                component={Link}
                to={l.to}
                selected={isActive(l.to)}
              >
                <ListItemIcon>{l.icon}</ListItemIcon>
                <ListItemText primary={l.label} />
              </ListItemButton>
            ))}
            {usuario ? (
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon><LogoutIcon /></ListItemIcon>
                <ListItemText primary="Salir" />
              </ListItemButton>
            ) : (
              <ListItemButton component={Link} to="/login">
                <ListItemIcon><LoginIcon /></ListItemIcon>
                <ListItemText primary="Iniciar sesión" />
              </ListItemButton>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
