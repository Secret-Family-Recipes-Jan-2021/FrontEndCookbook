import {
  BrowserRouter as Router,
  Link, Route, Switch
} from 'react-router-dom';
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import RecipeList from "./components/RecipeList";
import RecipeLogin from "./components/RecipeLogin";
import RecipeRegister from './components/RecipeRegister';
import RecipeForm from './components/RecipeForm';
import RecipeHome from "./components/RecipeHome"
import jumbotron, { Jumbotron } from "react-bootstrap"


function App() {
  return (
    <Router>
      <div>
        <Jumbotron><h1 className = "LandingTitle">Welcome To Secret Cookbook!</h1></Jumbotron>
        <div><RecipeHome /></div>
        <ul className = "links">
          <li>
            <Link to='/users/login' className = "landingLink">Login</Link>
          </li>
          <li>
            <Link to='/users/register' className = "landingLink">Register</Link>
          </li>
         
        </ul>

        <Switch>
          <Route exact path='/recipes'>
          <PrivateRoute>
            <RecipeList />
          </PrivateRoute>
          </Route>

          <Route exact path='/recipes/new-recipe'>
            <PrivateRoute>
              <RecipeForm />
            </PrivateRoute>
          </Route>

          <Route path='/users/login'>
            <RecipeLogin />
          </Route>

          <Route path='/users/register'>
            <RecipeRegister />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
