import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Divider,
  Avatar,
  useTheme,
} from '@mui/material';
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  School as SchoolIcon,
} from '@mui/icons-material';
const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Por favor completá todos los campos');
      return;
    }
    navigate('/home');
  };
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f5f5f5',
        p: 2,
      }}
    >
      <Card
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 420,
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Avatar
              sx={{
                width: 64,
                height: 64,
                bgcolor: theme.palette.primary.main,
                mx: 'auto',
                mb: 2,
              }}
            >
              <SchoolIcon sx={{ fontSize: 32 }} />
            </Avatar>
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
              ClassUP
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Iniciá sesión para continuar
            </Typography>
          </Box>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            {error && (
              <Typography
                variant="body2"
                color="error"
                sx={{
                  mb: 2,
                  textAlign: 'center',
                  bgcolor: 'error.light',
                  p: 1,
                  borderRadius: 1,
                }}
              >
                {error}
              </Typography>
            )}
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="action" />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{ mb: 1 }}
            />
            <TextField
              fullWidth
              label="Contraseña"
              type={mostrarPassword ? 'text' : 'password'}
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setMostrarPassword(!mostrarPassword)}
                        edge="end"
                        size="small"
                        type="button"
                      >
                        {mostrarPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
              sx={{ mb: 2 }}
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              type="submit"
              sx={{
                borderRadius: 2,
                py: 1.5,
                textTransform: 'none',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              Iniciar Sesión
            </Button>
          </Box>
          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              o
            </Typography>
          </Divider>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              ¿No tenés cuenta?{' '}
              <Link to="/register" style={{ color: theme.palette.primary.main, textDecoration: 'none', fontWeight: 'bold' }}>
                Registrate
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Login;