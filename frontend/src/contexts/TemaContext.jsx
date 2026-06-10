import { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const TemaContext = createContext(null);
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#2563eb' },
    secondary: { main: '#16a34a' },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#2563eb' },
    secondary: { main: '#16a34a' },
  },
});
export function TemaProvider({ children }) {
  const [modoOscuro, setModoOscuro] = useState(false);
  const toggleTema = () => setModoOscuro((prev) => !prev);
  const tema = useMemo(() => (modoOscuro ? darkTheme : lightTheme), [modoOscuro]);
  return (
    <TemaContext.Provider value={{ modoOscuro, toggleTema }}>
      <ThemeProvider theme={tema}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </TemaContext.Provider>
  );
}
export function useTema() {
  return useContext(TemaContext);
}
