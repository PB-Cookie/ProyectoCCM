import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Login from './pages/Login.tsx'
import './index.css'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeOptions, ThemeProvider } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme'
import { esES } from '@mui/material/locale';


const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e3bafd', //#C585EF
    },
    secondary: {
      main: '#FB3838',
      contrastText: '#000000',
    },

    text: {
      primary: '#efefef',
    },

  },

}, esES);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  </StrictMode>,
)
