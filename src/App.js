import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Home></Home>
        <Router>
        <Switch>
          <Route path="/about">
           
          </Route>
          <Route path="/home">
           <Home></Home>
          </Route>
          <Route path="/">
           
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
