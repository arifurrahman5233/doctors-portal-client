import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">     
        <Router>
        <Switch>
          <Route to path="/appointment">
           <Appointment/>
          </Route>
          <Route path="/home">
           <Home/>
          </Route>
          <Route path="/login">
           <Login/>
          </Route>
          <Route path="/register">
           <Register/>
          </Route>
          <Route path="/">
          <Home/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
