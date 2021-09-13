import { ThemeProvider } from '@material-ui/styles';
import React from 'react'
import Home from './pages/Home'

import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
