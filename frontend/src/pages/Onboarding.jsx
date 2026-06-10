import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Fade,
  Typography,
  Chip,
  Card,
  CardContent,
  Link,
  Paper,
} from '@mui/material';
import {
  Star as StarIcon,
  School as SchoolIcon,
  Science as ScienceIcon,
  MenuBook as MenuBookIcon,
  Chat as ChatIcon,
  CalendarMonth as CalendarMonthIcon,
  AccessTime as AccessTimeIcon,
  VerifiedUser as VerifiedUserIcon,
  SyncAlt as SyncAltIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
const slides = [
  {
    id: 0,
    chip: { icon: <StarIcon fontSize="small" />, label: 'Tutor verificado', color: 'success' },
    illustration: (
      <Box
        sx={{
          width: 280,
          height: 280,
          borderRadius: 4,
          bgcolor: 'teal.50',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          mx: 'auto',
          mt: 2,
          mb: 4,
        }}
      >
        <SchoolIcon sx={{ fontSize: 120, color: '#2563eb' }} />
        <ScienceIcon sx={{ position: 'absolute', top: 24, left: 24, fontSize: 40, color: '#2563eb', opacity: 0.6 }} />
        <MenuBookIcon sx={{ position: 'absolute', top: 40, right: 32, fontSize: 36, color: '#16a34a', opacity: 0.6 }} />
        <ChatIcon sx={{ position: 'absolute', bottom: 32, left: 40, fontSize: 32, color: '#f59e0b', opacity: 0.6 }} />
      </Box>
    ),
    title: (
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', mb: 1.5 }}>
        Encontrá tu{' '}
        <Box component="span" sx={{ color: '#2563eb', fontWeight: 700 }}>
          tutor ideal
        </Box>
      </Typography>
    ),
    subtitle: 'Conectá con estudiantes avanzados que dominan exactamente las materias que necesitás aprobar.',
    buttonText: 'Siguiente',
    buttonColor: '#2563eb',
    linkText: '¿Ya tenés cuenta? Iniciá sesión',
    linkAction: 'login',
  },
  {
    id: 1,
    illustration: (
      <Box
        sx={{
          width: 280,
          height: 280,
          borderRadius: 4,
          bgcolor: '#1e3a5f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          position: 'relative',
          mx: 'auto',
          mt: 2,
          mb: 4,
        }}
      >
        <CalendarMonthIcon sx={{ fontSize: 100, color: '#fff' }} />
        <AccessTimeIcon sx={{ fontSize: 100, color: '#fff' }} />
      </Box>
    ),
    title: (
      <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', mb: 1.5, color: '#111827' }}>
        Aprendé a tu ritmo
      </Typography>
    ),
    subtitle: 'Flexibilidad total de horarios y apoyo personalizado para alcanzar tus metas académicas sin estrés.',
    buttonText: 'Continuar',
    buttonColor: '#2563eb',
    linkText: 'Ver tutores disponibles',
    linkAction: 'login',
  },
  {
    id: 2,
    topLogo: true,
    chip: { label: 'Paso 3 de 3', color: 'success' },
    title: (
      <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 1.5, color: '#111827', fontSize: '2.5rem' }}>
        Seguro y verificado
      </Typography>
    ),
    subtitle: 'Tu seguridad es nuestra prioridad. Todos nuestros tutores pasan por un proceso de validación de identidad y títulos. Además, procesamos tus pagos de forma segura a través de las plataformas líderes.',
    items: [
      {
        icon: <VerifiedUserIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
        title: 'Protección al Estudiante',
        desc: 'Liberamos el pago solo después de tu clase confirmada.',
      },
      {
        icon: <SyncAltIcon sx={{ fontSize: 32, color: '#16a34a' }} />,
        title: 'Múltiples medios de pago',
        desc: 'Aprovechá las promociones de tu banco con Modo o MercadoPago.',
      },
    ],
    paymentCard: true,
    buttonText: 'Empezar',
    buttonColor: '#16a34a',
    linkText: 'Volver',
    linkAction: 'back',
  },
];
export default function Onboarding() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const current = slides[activeSlide];
  const goToSlide = (index) => {
    setFadeIn(false);
    setTimeout(() => {
      setActiveSlide(index);
      setFadeIn(true);
    }, 300);
  };
  const handleSkip = () => {
    navigate('/login');
  };
  const handleButtonClick = () => {
    if (activeSlide < slides.length - 1) {
      goToSlide(activeSlide + 1);
    } else {
      localStorage.setItem('classup_onboarding_done', 'true');
      navigate('/login');
    }
  };
  const handleLinkClick = (action) => {
    if (action === 'back') {
      goToSlide(activeSlide - 1);
    } else {
      navigate('/login');
    }
  };
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        px: 3,
        py: 2,
      }}
    >
      {/* Skip Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
        <Button
          variant="text"
          onClick={handleSkip}
          sx={{ textTransform: 'none', color: '#6b7280', fontWeight: 500 }}
        >
          Omitir
        </Button>
      </Box>
      {/* Slide Content */}
      <Fade in={fadeIn} timeout={400}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Top Logo for Slide 3 */}
          {current.topLogo && (
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <SchoolIcon sx={{ fontSize: 48, color: '#2563eb', mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#2563eb' }}>
                ClassUP
              </Typography>
            </Box>
          )}
          {/* Chip */}
          {current.chip && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Chip
                icon={current.chip.icon}
                label={current.chip.label}
                color={current.chip.color}
                size="small"
                sx={{ fontWeight: 500 }}
              />
            </Box>
          )}
          {/* Illustration */}
          {current.illustration}
          {/* Title */}
          {current.title}
          {/* Subtitle */}
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: '#6b7280',
              maxWidth: 360,
              mx: 'auto',
              mb: current.items ? 2 : 4,
              lineHeight: 1.5,
            }}
          >
            {current.subtitle}
          </Typography>
          {/* Items for Slide 3 */}
          {current.items && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2, maxWidth: 360, mx: 'auto', width: '100%' }}>
              {current.items.map((item, idx) => (
                <Card key={idx} variant="outlined" sx={{ borderRadius: 2 }}>
                  <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, py: 2, '&:last-child': { pb: 2 } }}>
                    {item.icon}
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#111827', mb: 0.5 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.4 }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
          {/* Payment Card for Slide 3 */}
          {current.paymentCard && (
            <Paper
              elevation={0}
              sx={{
                bgcolor: '#1f2937',
                color: '#fff',
                py: 1.5,
                px: 3,
                borderRadius: 2,
                textAlign: 'center',
                mb: 3,
                maxWidth: 360,
                mx: 'auto',
                width: '100%',
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                Pagá con: Mercado | MODO
              </Typography>
            </Paper>
          )}
        </Box>
      </Fade>
      {/* Bottom Controls */}
      <Box sx={{ pb: 2, pt: 1 }}>
        {/* Progress Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 3 }}>
          {slides.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: idx === activeSlide ? 24 : 8,
                height: 8,
                borderRadius: 4,
                bgcolor: idx === activeSlide ? '#2563eb' : '#d1d5db',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
        {/* Main Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={handleButtonClick}
          endIcon={activeSlide === 2 ? <ArrowForwardIcon /> : activeSlide === 0 ? <ArrowForwardIcon /> : null}
          sx={{
            bgcolor: current.buttonColor,
            color: '#fff',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '1rem',
            py: 1.5,
            borderRadius: 3,
            mb: 2,
            '&:hover': {
              bgcolor: current.buttonColor,
              filter: 'brightness(0.9)',
            },
          }}
        >
          {current.buttonText}
        </Button>
        {/* Bottom Link */}
        <Box sx={{ textAlign: 'center' }}>
          <Link
            component="button"
            variant="body2"
            onClick={() => handleLinkClick(current.linkAction)}
            sx={{
              color: current.linkAction === 'back' ? '#6b7280' : '#2563eb',
              textDecoration: 'none',
              fontWeight: 500,
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              fontSize: '0.875rem',
            }}
          >
            {current.linkText}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}