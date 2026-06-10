import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const TemaContext = createContext();
export const useTema = () => useContext(TemaContext);

export function TemaProvider({ children }) {
  const [modo, setModo] = useState(
    () => localStorage.getItem("tema") || "light"
  );

  const toggleTema = () => {
    setModo((prev) => {
      const nuevo = prev === "light" ? "dark" : "light";
      localStorage.setItem("tema", nuevo);
      return nuevo;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: modo,
          primary: { main: "#2563eb" },
          secondary: { main: "#16a34a" },
          background:
            modo === "light"
              ? { default: "#f5f7fb", paper: "#ffffff" }
              : { default: "#0f172a", paper: "#1e293b" },
        },
        shape: { borderRadius: 12 },
        typography: {
          fontFamily: `"Inter","Roboto","Helvetica","Arial",sans-serif`,
          h1: { fontWeight: 700 },
          h2: { fontWeight: 700 },
          h3: { fontWeight: 700 },
          button: { textTransform: "none", fontWeight: 600 },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: { boxShadow: "0 1px 3px rgba(0,0,0,0.08)" },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 16,
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
              },
            },
          },
          MuiButton: {
            styleOverrides: { root: { borderRadius: 10, paddingInline: 20 } },
          },
        },
      }),
    [modo]
  );

  return (
    <TemaContext.Provider value={{ modo, toggleTema }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TemaContext.Provider>
  );
}
