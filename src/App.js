import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Registro from './components/Registro';
import { Acerca } from './components/Acerca';
import { Inicio } from './components/Inicio';

function App() {

  return (
    <div>
      <Router>
        <Switch>
            <Route exact='true' path="/" component={Inicio} />
            <Route exact='true' path="/registro" component={Registro} />
            <Route exact='true' path="/acerca" component={Acerca} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
