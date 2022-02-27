import Form from  './components/Form';
import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom";
import About from './routes/About';
import Login from './routes/Login';
import Signup from './routes/Signup';
import { useState, useEffect } from 'react';


function App() {
  const [ pocketLoggedIn, setPocketLoggedIn ] = useState(false);
  const [ loggedIn, setLoggedIn ] = useState(false);

  const firstLoad = () => {
    console.log('firstload()');
    fetch(`${process.env.REACT_APP_API_DOMAIN}/api`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      //console.log('Pocket logged in: ', data.pocketLoggedIn);
      data.pocketLoggedIn ? setPocketLoggedIn(true) : setPocketLoggedIn(false);
      data.loggedIn ? setLoggedIn(true) : setLoggedIn(false);
    })
    .catch(err => console.log(err));
  }
  
  useEffect(firstLoad, []); // Run only once on component mount


  return (
    
    <div className="App">
      <Navbar />
      <h1>Sammelband</h1>

      <Routes>
        <Route path="/" element={ <Form pocketLoggedIn={ pocketLoggedIn } setPocketLoggedIn={ setPocketLoggedIn } loggedIn={ loggedIn } setLoggedIn={ setLoggedIn }/>} />
        <Route path="/about" element={ <About />}/>
        <Route path="/login" element={ <Login loggedIn={ loggedIn } setLoggedIn={ setLoggedIn }/>}/>
        <Route path="/signup" element={ <Signup />}/>

      </Routes>
  
      
    </div>
 
  );
}

export default App;
