import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home';

import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </AuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
