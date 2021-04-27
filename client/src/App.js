import React, {useState, useEffect} from 'react';
import {TopBar, Navbar, Login, Register} from './components';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import withTheme from './hoc/withTheme';
// import Login from './components/Login';


const App = () => {
 const initUserLogged = localStorage.getItem('isLogged') || 'false';
  const [isLogged, setLogged] = useState(initUserLogged)
  const [fields, setFields] = useState(null)
  window.addEventListener('storage',  () => {
    setLogged(localStorage.getItem('isLogged') );
  });

  const fetchFields = () => {

  }

  useEffect(() => {
    fetchFields();
  }, []);
  
  return (
    <BrowserRouter>
      <Switch>
          {/* TODO routes to posts*/}
          {/*TODO add component Login*/}
        <Route exact path="/signin" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
      <CssBaseline />
      <div className="App">
        <TopBar isLogged = {isLogged} setLogged={setLogged}/>
        <Navbar fields={fields}/>
      </div>
    </BrowserRouter>
  );
};



export default withTheme(App);
