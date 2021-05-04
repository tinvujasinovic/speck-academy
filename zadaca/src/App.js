import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';
import { Main } from './lib/style/generalStyles';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route exact path="/" component={Home}/>
        <Route path="/events" component={Events}/>
        <Route path="/event/:id" component={Event}/>  
        <Route path="/login" component={Login}/>  
        <Route path="/register" component={Register}/>  
      </Main>
      <Footer />
    </>
  );
}

export default App;
