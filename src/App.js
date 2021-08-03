import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import FrontPage from './Components/FrontPage';
import Menu from './Components/Menu';
import PuzzleContainer from './Components/Picture1/PuzzleContainer';
import PuzzleContainer2 from './Components/Picture2/PuzzleContainer2';
import PuzzleContainer3 from './Components/Picture3/PuzzleContainer3';
import PuzzleContainer4 from './Components/Picture4/PuzzleContainer4';

function App() {
    return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={FrontPage}/>
          <Route path={"/Differently"} exact component={Menu}/>
          <Route path={"/Differently/1/smallTown"} exact component={PuzzleContainer}/>
          <Route path={"/Differently/2/A-Living-Room"} exact component={PuzzleContainer2}/>
          <Route path={"/Differently/3/logosUS"} exact component={PuzzleContainer3}/>
          <Route path={"/Differently/4/garfield"} exact component={PuzzleContainer4}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;