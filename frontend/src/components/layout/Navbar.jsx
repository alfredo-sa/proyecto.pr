import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useUsuario } from '../../contexts/UsuarioContext';
import { useTema } from '../../contexts/TemaContext';
const NAV_LINKS = [
  { label: 'Inicio', path: '/home' },
  { label: 'Buscar', path: '/search' },
  { label: 'Reservas', path: '/bookings' },
  { label: 'Dashboard', path: '/dashboard' },
];
function Navbar() {
  const navigate = useNavigate();
  const { usuario, logout } = useUsuario() || {};
  const { modoOscuro, toggleTema } = useTema() || {};
  const [drawerAbierto, setDrawerAbierto] = useState(false);
  const handleLogout = () => {
    logout?.();
    navigate('/login');
  };
  const toggleDrawer = (abierto) => () => {
    setDrawerAbierto(abierto);
  };
  const obtenerInicial = (nombre) => {
    if (!nombre) return '?';
    return nombre.charAt(0).toUpperCase();
  };
  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: 'background.paper', color: 'text.primary' }} elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/home"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <SchoolIcon sx={{ color: '#2563eb', mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              ClassUP
            </Typography>
          </Box>
          {/* Desktop nav + actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Links desktop (ocultos en mobile) */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{ color: 'text.primary', textTransform: 'none' }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
            {/* Toggle tema */}
            <IconButton onClick={toggleTema} sx={{ color: 'text.primary' }}>
              {modoOscuro ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            {/* Auth */}
            {usuario ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar sx={{ bgcolor: '#2563eb', width: 32, height: 32, fontSize: 14 }}>
                  {obtenerInicial(usuario.nombre)}
                </Avatar>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<LogoutIcon />}
                  onClick={handleLogout}
                  sx={{
                    textTransform: 'none',
                    color: 'text.primary',
                    borderColor: 'divider',
                    display: { xs: 'none', sm: 'flex' },
                  }}
                >
                  Salir
                </Button>
              </Box>
            ) : (
              <Button
                variant="contained"
                size="small"
                onClick={() => navigate('/login')}
                sx={{
                  bgcolor: '#2563eb',
                  '&:hover': { bgcolor: '#1d4ed8' },
                  textTransform: 'none',
                }}
              >
                Iniciar Sesión
              </Button>
            )}
            {/* Menú hamburguesa mobile */}
            <IconButton
              sx={{ display: { md: 'none' }, color: 'text.primary' }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer mobile */}
      <Drawer anchor="right" open={drawerAbierto} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 260, pt: 2 }}>
          <Box sx={{ px: 2, pb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <SchoolIcon sx={{ color: '#2563eb' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              ClassUP
            </Typography>
          </Box>
          <Divider />
          <List>
            {NAV_LINKS.map((link) => (
              <ListItem key={link.path} disablePadding>
                <ListItemButton component={Link} to={link.path} onClick={toggleDrawer(false)}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {usuario ? (
              <ListItem disablePadding>
                <ListItemButton onClick={() => { handleLogout(); toggleDrawer(false)(); }}>
                  <LogoutIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  <ListItemText primary="Salir" />
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/login" onClick={toggleDrawer(false)}>
                  <ListItemText primary="Iniciar Sesión" />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
export default Navbar;
