import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Event from './pages/Event/Event';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Route exact path="/" component={Home}/>
        <Route path="/events" component={Events}/>
        <Route path="/event" component={Event}/>
      </Main>
      <Footer />
    </>
  );
}

export default App;
