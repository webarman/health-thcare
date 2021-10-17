import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login-Register/Login/Login";
import Register from "./Pages/Login-Register/Register/Register";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          {/* <LoginRegister></LoginRegister> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
