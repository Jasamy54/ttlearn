import './App.css';
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Family from './pages/Family';
import Home from './pages/Home';
import Foodndrink from './pages/Foodndrink';
import Navbar from './Navbar';
import Commonp from './pages/Commonp';
import Ditems from './pages/Ditems';
import Verbs from './pages/Verbs';
import Color from './pages/Color';



function App() {
  return (
    <div className="App">

<>
<Router>
<Navbar />
<Routes>
  
  <Route path='/' element={<Home /> } />
  <Route path='/family' element={<Family/> } />
  <Route path='/food' element={<Foodndrink/> } />
  <Route path='/color' element={<Color /> } />
  <Route path='/cphrases' element={<Commonp /> } />
  <Route path='/ditems' element={<Ditems/> } />
  <Route path='/verbs' element={<Verbs /> } />
</Routes>
</Router>
</>




    </div>
  );
}

export default App;
