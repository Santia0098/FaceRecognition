import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Registro from './components/Registro';
import { Acerca } from './components/Acerca';
import { Inicio } from './components/Inicio';
import { Deteccion } from './components/Deteccion';
import Pandemia from './components/Pantemia';
import Seguridad from './components/Seguridad';

function App() {

  return (
    <div>
      <Router>
        <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/acerca" component={Acerca} />
            <Route exact path="/deteccion" component={Deteccion} />
            <Route exact path='/pandemia' component={Pandemia} />
            <Route exact path='/seguridad' component={Seguridad}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
