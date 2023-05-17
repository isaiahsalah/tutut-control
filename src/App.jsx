import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

import { SesionProvider } from "./providers/SesionProvider";
import { MyRoutes } from "./routes/MyRoutes";

// Crea un objeto de tema de Material UI personalizado para el modo oscuro
const darkTheme = createTheme({

  palette: {
    mode: 'dark',
    primary: { main: '#2b724a' },
  },
});

const App = () => {

  return (
    // Carga el script de Google Maps API
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} >
      {/* Proporciona el contexto de sesión para toda la aplicación */}
      <SesionProvider>
        {/* Proporciona el contexto para mostrar notificaciones */}
        <SnackbarProvider maxSnack={3}>
          {/* Proporciona el tema de Material UI personalizado */}
          <ThemeProvider theme={darkTheme}>
            {/* Establece los estilos base para la aplicación */}
            <CssBaseline />
            <BrowserRouter>
              {/* Renderiza las rutas de la aplicación */}
              <MyRoutes />
            </BrowserRouter>
          </ThemeProvider>
        </SnackbarProvider>
      </SesionProvider>
    </LoadScript>

  )
}

export default App