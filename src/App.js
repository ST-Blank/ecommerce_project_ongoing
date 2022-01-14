import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} 
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="app">
      <Routes>
        <Route exact path="/" element={<><Header/><Home/></>}/>
          {/* header */}
          <Route exact path="/checkout" element={<><Header/> <Checkout /></>}/>
          <Route exact path="/login" element={<><Login/></>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
