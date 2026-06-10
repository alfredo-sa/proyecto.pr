import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  Typography,
  CircularProgress,
} from "@mui/material";
import {
  School as SchoolIcon,
  Calculate as CalculateIcon,
  MenuBook as MenuBookIcon,
  Biotech as BiotechIcon,
  Functions as FunctionsIcon,
  Science as ScienceIcon,
  Lightbulb as LightbulbIcon,
  Edit as EditIcon,
  AutoStories as AutoStoriesIcon,
  Laptop as LaptopIcon,
} from "@mui/icons-material";
const decorativeIcons = [
  { Icon: CalculateIcon, top: "8%", left: "10%", fontSize: 48 },
  { Icon: MenuBookIcon, top: "15%", right: "12%", fontSize: 56 },
  { Icon: BiotechIcon, top: "30%", left: "5%", fontSize: 40 },
  { Icon: FunctionsIcon, top: "25%", right: "8%", fontSize: 44 },
  { Icon: ScienceIcon, top: "50%", left: "3%", fontSize: 52 },
  { Icon: LightbulbIcon, top: "45%", right: "5%", fontSize: 38 },
  { Icon: EditIcon, top: "65%", left: "8%", fontSize: 42 },
  { Icon: AutoStoriesIcon, top: "70%", right: "10%", fontSize: 48 },
  { Icon: LaptopIcon, top: "85%", left: "15%", fontSize: 44 },
  { Icon: CalculateIcon, top: "80%", right: "15%", fontSize: 36 },
  { Icon: FunctionsIcon, top: "10%", left: "50%", fontSize: 32 },
  { Icon: MenuBookIcon, top: "90%", right: "40%", fontSize: 34 },
];
export default function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      const onboardingDone = localStorage.getItem("classup_onboarding_done");
      if (onboardingDone === "true") {
        navigate("/login");
      } else {
        navigate("/onboarding");
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#2563eb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background icons */}
      {decorativeIcons.map((item, index) => (
        <item.Icon
          key={index}
          sx={{
            position: "absolute",
            top: item.top,
            left: item.left,
            right: item.right,
            fontSize: item.fontSize,
            color: "#ffffff",
            opacity: 0.15,
            pointerEvents: "none",
          }}
        />
      ))}
      {/* Center content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {/* White card with icon */}
        <Card
          elevation={4}
          sx={{
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 3,
            backgroundColor: "#ffffff",
          }}
        >
          <SchoolIcon sx={{ fontSize: 64, color: "#2563eb" }} />
        </Card>
        {/* App name */}
        <Typography
          variant="h3"
          sx={{
            mt: 3,
            color: "#ffffff",
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          ClassUP
        </Typography>
        {/* Subtitle */}
        <Typography
          variant="h6"
          sx={{
            mt: 1,
            color: "rgba(255, 255, 255, 0.85)",
            textAlign: "center",
            px: 2,
          }}
        >
          Tu camino al éxito académico comienza aquí.
        </Typography>
      </Box>
      {/* Bottom loading indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 48,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <CircularProgress
          size={32}
          thickness={4}
          sx={{ color: "#ffffff" }}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 1.5,
            color: "#ffffff",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Cargando
        </Typography>
        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            color: "rgba(255, 255, 255, 0.85)",
            fontStyle: "italic",
          }}
        >
          Preparando tus clases particulares...
        </Typography>
      </Box>
    </Box>
  );
}