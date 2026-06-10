import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Avatar,
  Chip,
  LinearProgress,
  Link as MuiLink,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import CalculateIcon from '@mui/icons-material/Calculate';
import TranslateIcon from '@mui/icons-material/Translate';
import { useUsuario } from '../contexts/UsuarioContext';
const TUTORES_DESTACADOS = [
  {
    id: 1,
    nombre: 'Dra. Lucia Giménez',
    nivel: 'UNIVERSITARIO',
    rating: 4.9,
    resenas: 124,
    precio: 5200,
  },
  {
    id: 2,
    nombre: 'Ing. Carlos Ruíz',
    nivel: 'SECUNDARIA',
    rating: 5.0,
    resenas: 82,
    precio: 4800,
  },
];
const PROGRESO_MATERIAS = [
  {
    id: 1,
    nombre: 'Matemática CBC',
    completadas: 7,
    total: 10,
    porcentaje: 70,
    icono: <CalculateIcon />,
  },
  {
    id: 2,
    nombre: 'Inglés Intermedio',
    completadas: 3,
    total: 12,
    porcentaje: 25,
    icono: <TranslateIcon />,
  },
];
function Home() {
  const { usuario } = useUsuario() || {};
  const nombre = usuario?.nombre || 'Mateo';
  const [busqueda, setBusqueda] = useState('');
  const [nivel, setNivel] = useState('');
  const [presupuesto, setPresupuesto] = useState('');
  const formatearPrecio = (p) => p.toLocaleString('es-AR');
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 480,
          position: 'relative',
        }}
      >
        {/* Sección 1 — Header */}
        <Box sx={{ px: 2, pt: 3, pb: 2 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', color: 'text.primary' }}
          >
            ¡Hola, {nombre}!
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mt: 0.5 }}>
            ¿Qué querés aprender hoy?
          </Typography>
        </Box>
        {/* Sección 2 — Búsqueda rápida */}
        <Box sx={{ px: 2, mb: 3 }}>
          <Card elevation={2} sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography
                variant="caption"
                sx={{
                  color: '#2563eb',
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  display: 'block',
                  mb: 1.5,
                }}
              >
                BÚSQUEDA RÁPIDA
              </Typography>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Materia, tema o profesor"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'text.secondary' }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControl fullWidth size="small">
                  <InputLabel id="nivel-label">Nivel Académico</InputLabel>
                  <Select
                    labelId="nivel-label"
                    value={nivel}
                    label="Nivel Académico"
                    onChange={(e) => setNivel(e.target.value)}
                  >
                    <MenuItem value="primaria">Primaria</MenuItem>
                    <MenuItem value="secundaria">Secundaria</MenuItem>
                    <MenuItem value="cbc">CBC</MenuItem>
                    <MenuItem value="universitario">Universitario</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  size="small"
                  label="Presupuesto Máx."
                  value={presupuesto}
                  onChange={(e) => setPresupuesto(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">ARS</InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: '#2563eb',
                    '&:hover': { bgcolor: '#1d4ed8' },
                    textTransform: 'none',
                    fontWeight: 'bold',
                    py: 1.2,
                  }}
                >
                  Buscar Clases
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>
        {/* Sección 3 — Próxima clase */}
        <Box sx={{ px: 2, mb: 3 }}>
          <Card
            sx={{
              bgcolor: '#2563eb',
              color: '#fff',
              borderRadius: 3,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <CardContent sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="caption" sx={{ opacity: 0.85 }}>
                Próxima Clase
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 0.5 }}>
                Análisis Matemático I
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
                Hoy, 18:30 hs
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#16a34a',
                  '&:hover': { bgcolor: '#15803d' },
                  textTransform: 'none',
                  fontWeight: 'bold',
                }}
              >
                Ir al Aula
              </Button>
            </CardContent>
            <SchoolIcon
              sx={{
                position: 'absolute',
                right: -10,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: 160,
                color: 'rgba(255,255,255,0.15)',
                zIndex: 0,
              }}
            />
          </Card>
        </Box>
        {/* Sección 4 — Tutores destacados */}
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              px: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              mb: 1.5,
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Tutores Destacados
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Profesores verificados con las mejores reseñas
              </Typography>
            </Box>
            <MuiLink
              href="#"
              underline="none"
              sx={{
                color: '#2563eb',
                fontWeight: 'bold',
                fontSize: 13,
                whiteSpace: 'nowrap',
                ml: 1,
                mt: 0.5,
              }}
            >
              Ver todos →
            </MuiLink>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              overflowX: 'auto',
              px: 2,
              pb: 1,
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {TUTORES_DESTACADOS.map((tutor) => (
              <Card
                key={tutor.id}
                sx={{
                  minWidth: 220,
                  maxWidth: 220,
                  borderRadius: 3,
                  flexShrink: 0,
                }}
                elevation={2}
              >
                <Box
                  sx={{
                    position: 'relative',
                    bgcolor: 'grey.100',
                    height: 130,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Chip
                    label="VERIFICADO"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      bgcolor: '#16a34a',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 10,
                      height: 22,
                    }}
                  />
                  <Avatar sx={{ width: 80, height: 80, bgcolor: 'grey.300' }}>
                    <PersonIcon sx={{ fontSize: 50, color: 'grey.500' }} />
                  </Avatar>
                </Box>
                <CardContent sx={{ pb: '16px !important' }}>
                  <Chip
                    label={tutor.nivel}
                    size="small"
                    sx={{
                      fontSize: 9,
                      height: 18,
                      mb: 1,
                      bgcolor: 'grey.200',
                      fontWeight: 'bold',
                    }}
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 'bold', mb: 0.5 }}
                  >
                    {tutor.nombre}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <StarIcon sx={{ color: '#facc15', fontSize: 16 }} />
                    <Typography variant="caption" sx={{ ml: 0.3, fontWeight: 'bold' }}>
                      {tutor.rating}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ ml: 0.5, color: 'text.secondary' }}
                    >
                      ({tutor.resenas} reseñas)
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ color: '#2563eb', fontWeight: 'bold', mb: 1 }}
                  >
                    Desde ARS {formatearPrecio(tutor.precio)}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    sx={{
                      bgcolor: '#16a34a',
                      '&:hover': { bgcolor: '#15803d' },
                      textTransform: 'none',
                      fontWeight: 'bold',
                    }}
                  >
                    Reservar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
        {/* Sección 5 — Tu Progreso */}
        <Box sx={{ px: 2, mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1.5 }}>
            Tu Progreso
          </Typography>
          <Stack spacing={2}>
            {PROGRESO_MATERIAS.map((m) => (
              <Card key={m.id} sx={{ borderRadius: 3 }} elevation={1}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ bgcolor: 'grey.200', color: 'grey.700', mr: 1.5 }}>
                      {m.icono}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        {m.nombre}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {m.completadas} de {m.total} clases completadas
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 'bold', color: 'text.primary' }}
                    >
                      {m.porcentaje}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={m.porcentaje}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: 'grey.200',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: '#16a34a',
                      },
                    }}
                  />
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
export default Home;
