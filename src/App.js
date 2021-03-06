import './App.css';

import Slider from './components/SliderComponent';
import RegistrationEnd from './components/RegistrationEnd';
import Valoration from './components/Valoration';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import WellcomePage from './pages/WellcomePage';
import HomePage from './pages/HomePage';
import ScanPage from './pages/ScanPage';
function App() {
  return (
    <Router>
    <div className="App">
       <Routes>
         <Route path = '/' element = {<WellcomePage/>}/>
         <Route path = '/home' element = {<HomePage/>}/>
         <Route path = '/ScanPage' element = {<ScanPage/>}/>
      </Routes>
   
    
   

   
   
    </div>
    
    </Router>
  );
}

export default App;