import './App.scss';
import { Route } from 'react-router-dom';
import { Main } from './lib/style/generalStyles';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Admin from './pages/Admin/Admin';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {

  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'));
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('authToken'));

  const updateIsLoggedIn = (value) => {
    setIsLoggedIn(value);
  }

  const updateIsAdmin = (value) => {
    setIsAdmin(value);
  }
  return (
    <>
      <Header isAdmin={isAdmin} isLoggedIn={isLoggedIn} setIsAdmin={updateIsAdmin} setIsLoggedIn={updateIsLoggedIn}  />
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/event/:id" component={Event} />
        <Route path="/login" render={props => <Login {...props} setIsAdmin={updateIsAdmin} setIsLoggedIn={updateIsLoggedIn} />} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/admin" component={Admin} isAdmin={isAdmin}/>
      </Main>
      <Footer />
    </>
  );
}

export default App;
