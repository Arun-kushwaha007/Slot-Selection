
import './App.css';
import Navbar from './Component/Navbar/navbar';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Allroutes from './Allroutes'
function App() {
  const [slideIn , SetslideIn] = useState(true);
  useEffect(() =>{
    if(window.innerWidth <= 768){
      SetslideIn(false)
    }
  },[])

  const handleSlideIn = ()=>{
    if(window.innerWidth <= 768){
      SetslideIn((state) => !state)
    }
  }

  return (
    <div className="App">
      <Router>

      <Navbar handleSlideIn={handleSlideIn}/>
      <Allroutes slideIn={slideIn} handleSlideIn={handleSlideIn}/>
      </Router>
    </div>
  );
}

export default App;
