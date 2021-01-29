import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import UserHomePage from "./pages/UserHomePage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./pages/LandingPage";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <PrivateRoute exact path="/user" component={UserHomePage} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
