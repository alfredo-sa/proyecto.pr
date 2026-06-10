import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import {
  School as SchoolIcon,
  VerifiedUser as VerifiedUserIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [rol, setRol] = useState("estudiante");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      if (rememberMe) {
        localStorage.setItem("classup_remember_email", email);
      } else {
        localStorage.removeItem("classup_remember_email");
      }
      localStorage.setItem("classup_logged_in", "true");
      localStorage.setItem("classup_rol", rol);
      navigate("/home");
    }
  };
  const handleGoogleLogin = () => {
    localStorage.setItem("classup_logged_in", "true");
    localStorage.setItem("classup_rol", rol);
    navigate("/home");
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: (theme) => theme.palette.background.default,
        py: 4,
        px: 2,
      }}
    >
      {/* Card principal */}
      <Card
        sx={{
          width: "100%",
          maxWidth: 440,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          p: 4,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
          <SchoolIcon sx={{ fontSize: 40, color: "#2563eb", mr: 1 }} />
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2563eb" }}>
            ClassUP
          </Typography>
        </Box>
        {/* Títulos */}
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#000000", textAlign: "center", mb: 1 }}>
          ¡Hola!
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280", textAlign: "center", mb: 3 }}>
          Ingresá a tu cuenta para continuar aprendiendo.
        </Typography>
        {/* Toggle de rol */}
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#e5e7eb",
            borderRadius: 2,
            p: 0.5,
            mb: 3,
          }}
        >
          <Button
            fullWidth
            onClick={() => setRol("estudiante")}
            sx={{
              borderRadius: 1.5,
              textTransform: "none",
              fontWeight: 500,
              backgroundColor: rol === "estudiante" ? "#ffffff" : "transparent",
              color: rol === "estudiante" ? "#000000" : "#6b7280",
              boxShadow: rol === "estudiante" ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
              py: 1,
            }}
          >
            Soy Estudiante
          </Button>
          <Button
            fullWidth
            onClick={() => setRol("tutor")}
            sx={{
              borderRadius: 1.5,
              textTransform: "none",
              fontWeight: 500,
              backgroundColor: rol === "tutor" ? "#ffffff" : "transparent",
              color: rol === "tutor" ? "#000000" : "#6b7280",
              boxShadow: rol === "tutor" ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
              py: 1,
            }}
          >
            Soy Tutor
          </Button>
        </Box>
        {/* Google */}
        <Button
          fullWidth
          variant="outlined"
          onClick={handleGoogleLogin}
          sx={{
            borderColor: "#d1d5db",
            color: "#374151",
            backgroundColor: "#ffffff",
            textTransform: "none",
            fontWeight: 500,
            mb: 2,
            py: 1.2,
            display: "flex",
            gap: 1,
          }}
        >
          <Box
            component="span"
            sx={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#db4437",
              lineHeight: 1,
            }}
          >
            G
          </Box>
          Continuar con Google
        </Button>
        {/* Divisor */}
        <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
          <Divider sx={{ flex: 1 }} />
          <Typography
            variant="caption"
            sx={{
              mx: 2,
              color: "#9ca3af",
              fontWeight: 500,
              letterSpacing: 1,
            }}
          >
            O CON EMAIL
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>
        {/* Formulario */}
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Typography variant="body2" sx={{ color: "#374151", mb: 0.5, fontWeight: 500 }}>
            ¿Cuál es tu email?
          </Typography>
          <TextField
            fullWidth
            placeholder="ejemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "#9ca3af" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                backgroundColor: "#f9fafb",
              },
            }}
          />
          <Typography variant="body2" sx={{ color: "#374151", mb: 0.5, fontWeight: 500 }}>
            Tu contraseña
          </Typography>
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: "#9ca3af" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? (
                      <VisibilityOffIcon sx={{ color: "#9ca3af" }} />
                    ) : (
                      <VisibilityIcon sx={{ color: "#9ca3af" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              mb: 1.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                backgroundColor: "#f9fafb",
              },
            }}
          />
          {/* Recordarme + Olvidaste */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  size="small"
                  sx={{ color: "#9ca3af", "&.Mui-checked": { color: "#2563eb" } }}
                />
              }
              label={
                <Typography variant="body2" sx={{ color: "#6b7280" }}>
                  Recordarme
                </Typography>
              }
            />
            <Typography
              variant="body2"
              component="a"
              href="#"
              sx={{
                color: "#2563eb",
                textDecoration: "none",
                fontWeight: 500,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              ¿Olvidaste tu contraseña?
            </Typography>
          </Box>
          {/* Botón iniciar sesión */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#2563eb",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: 2,
              py: 1.5,
              mb: 2,
              "&:hover": { backgroundColor: "#1d4ed8" },
            }}
          >
            Iniciar Sesión
          </Button>
        </Box>
        {/* Registro */}
        <Typography variant="body2" sx={{ textAlign: "center", color: "#6b7280" }}>
          ¿No tenés una cuenta?{" "}
          <Typography
            component="a"
            href="/register"
            onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }}
            variant="body2"
            sx={{
              color: "#16a34a",
              fontWeight: 600,
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Registrate gratis
          </Typography>
        </Typography>
      </Card>
      {/* Footer de seguridad */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
          gap: 1,
        }}
      >
        <VerifiedUserIcon sx={{ fontSize: 20, color: "#16a34a" }} />
        <Typography variant="body2" sx={{ color: "#6b7280", textAlign: "center" }}>
          Tus datos están protegidos bajo estándares académicos de UBA/UTN.
        </Typography>
      </Box>
      {/* Copyright */}
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Typography variant="caption" sx={{ color: "#9ca3af" }}>
          © 2024 ClassUP. Todos los derechos reservados.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 0.5 }}>
          <Typography
            component="a"
            href="#"
            variant="caption"
            sx={{ color: "#9ca3af", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
          >
            Términos
          </Typography>
          <Typography
            component="a"
            href="#"
            variant="caption"
            sx={{ color: "#9ca3af", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
          >
            Privacidad
          </Typography>
          <Typography
            component="a"
            href="#"
            variant="caption"
            sx={{ color: "#9ca3af", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
          >
            Ayuda
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
