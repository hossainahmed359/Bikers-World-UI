import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <div className="App text-fonts">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/purchase/:_id">
              <Purchase></Purchase>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
