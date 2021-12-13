import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Catalogo from './pages/Catalogo';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/catalogo" exact>
        <Catalogo />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
