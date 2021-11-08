import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">     
    <AuthProvider>
    <Router>
        <Switch>
          <PrivateRoute to path="/appointment">
           <Appointment/>
          </PrivateRoute>
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
    </AuthProvider>
    </div>
  );
}

export default App;
