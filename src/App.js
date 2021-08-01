import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import FrontPage from './Components/FrontPage';
import Menu from './Components/Menu';
import PuzzleContainer from './Components/PuzzleContainer';

function App() {
    return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={FrontPage}/>
          <Route path={"/Differently"} exact component={Menu}/>
          <Route path={"/Differently/:id/:pictureName"} exact component={PuzzleContainer}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;