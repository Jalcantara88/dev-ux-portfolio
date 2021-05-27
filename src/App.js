import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavbarComponent';
import Home from './components/HomeComponent';
import About from './components/AboutComponent';
import Resume from './components/ResumeComponent';
import Waves from './components/WaveComponent';
import Footer from './components/FooterComponent';
import BottomNavBar from './components/BottomNavComponent';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';




function App() {
  return (
    <div className="App header">
    <BrowserRouter>
      <NavBar/>
      
      
      <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route path='/about'>
            <About/>
        </Route>
        <Route path='/resume'>
            <Resume/>
        </Route>
        <Redirect to ='/'/>
      </Switch>
      
      <Waves/>
      
      <Footer/>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
