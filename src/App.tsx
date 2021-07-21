import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations';
import { Inspiration } from './pages/Inspiration';
import { Personalize } from './pages/Personalize';
import { Destination } from './pages/Destination';
import { Pack } from './pages/Pack';

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
            <Route exact path="/destinations" component={Destinations} />
            <Route exact path="/destination/:name" component={Destination} />
            <Route exact path="/inspirations" component={Inspiration} />
            <Route exact path="/personalize" component={Personalize} />
            <Route exact path="/pack/:name" component={Pack} />
          </Switch>
        </AuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
