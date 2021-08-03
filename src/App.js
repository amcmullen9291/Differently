import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import FrontPage from './Components/FrontPage';
import Menu from './Components/Menu';
import PuzzleContainer from './Components/Picture1/PuzzleContainer';
import PuzzleContainer2 from './Components/Picture2/PuzzleContainer2';
import PuzzleContainer3 from './Components/Picture3/PuzzleContainer3';
import PuzzleContainer4 from './Components/Picture4/PuzzleContainer4';
import PuzzleContainer5 from './Components/Picture5/PuzzleContainer5';
import PuzzleContainer6 from './Components/Picture6/PuzzleContainer6';

function App() {
    return (
    <>
    <Router>
      <Switch>
          <Route path={"/"} exact component={FrontPage}/>
          <Route path={"/Differently"} exact component={Menu}/>
          <Route path={"/Differently/1/smallTown"} exact component={PuzzleContainer}/>
          <Route path={"/Differently/2/A-Living-Room"} exact component={PuzzleContainer2}/>
          <Route path={"/Differently/3/nascar"} exact component={PuzzleContainer3}/>
          <Route path={"/Differently/4/A-Living-Room"} exact component={PuzzleContainer4}/>
          <Route path={"/Differently/5/garfield"} exact component={PuzzleContainer5}/>
          <Route path={"/Differently/6/logosUS"} exact component={PuzzleContainer6}/>
          <Redirect to={"/"} />
        </Switch>
    </Router>
    </>
  );
}

export default App;