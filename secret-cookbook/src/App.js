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


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/users/login'>Login</Link>
          </li>
          <li>
            <Link to='/users/register'>Register</Link>
          </li>
         
        </ul>

        <Switch>
          <Route exact path='/recipes'>
          <PrivateRoute>
            <RecipeList />
          </PrivateRoute>
          </Route>

          <Route exact path='/recipes/new-recipe'>
            <RecipeForm />
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