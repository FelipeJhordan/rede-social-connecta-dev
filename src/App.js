import React from 'react'
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Auth from './components/Auth'
import GuestRoute from './routes/GuestRoutes'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import theme from './theme'

import './mock'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
         <Auth>
            <Routes>
              <Route path="//*" element={<Home />} />
              <Route path="/sign-up" element={<SignUp />} />
              <GuestRoute path="/sign-in" element={<SignIn />} />
            </Routes>
         </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
