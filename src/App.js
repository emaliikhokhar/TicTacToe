import './App.css';
import Intro from './Components/Intro';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Game from './Components/Game'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Intro}/>
          <Route exact path="/game" component={Game}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;