import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Router, Switch } from "react-router";
import { createBrowserHistory } from "history";
import Signup from "./Components/Auth/SignUp";
import UserProfileView from "./Components/UserProfile/UserProfile";
const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={history}>
       <Router history={history}>
          <Switch>
            <Route exact path={"/profile"} component={UserProfileView} />
            <Route path={"/"} component={Signup} />
          </Switch>
        </Router>
    </BrowserRouter> 
    
  );
}

export default App;
