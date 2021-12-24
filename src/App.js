import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import Dashboard from './Components/Dashboard';

function App(props) {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/dashboard"} component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
