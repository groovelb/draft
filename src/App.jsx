import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { defaultTheme as theme } from './styles/themes';
import { DraftLanding } from './components/templates/DraftLanding';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={ <DraftLanding /> } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
