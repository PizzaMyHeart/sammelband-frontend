import Form from  './components/Form';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import { Routes, Route} from "react-router-dom";
import About from './routes/About';
import Login from './routes/Login';
import Signup from './routes/Signup';
import { useState, useEffect } from 'react';


function App() {
  const [ pocketLoggedIn, setPocketLoggedIn ] = useState(false);
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [email, setEmail] = useState('');
  const [verified, setVerified] = useState(false);

  const firstLoad = () => {
    console.log('firstload()');
    fetch(`${process.env.REACT_APP_API_DOMAIN}/api`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setPocketLoggedIn(data.pocketLoggedIn);
      setLoggedIn(data.loggedIn);
      setEmail(data.email);
      setVerified(data.verified);
    })
    .catch(err => console.log(err));
  }
  
  useEffect(firstLoad, []); // Run only once on component mount


  return (
    
    <div className="App">
      <Navbar />
      <h1>Sammelband</h1>
      <Link to="/login">Login</Link>
      <Routes>
        <Route path="/" element=
          { <Form 
              pocketLoggedIn={ pocketLoggedIn } setPocketLoggedIn={ setPocketLoggedIn } 
              loggedIn={ loggedIn } setLoggedIn={ setLoggedIn }
              email={ email } setEmail={ setEmail }
              />} />
        <Route path="/about" element={ <About />}/>
        <Route path="/login" element={ <Login loggedIn={ loggedIn } setLoggedIn={ setLoggedIn } email={ email } setEmail={ setEmail }/>}/>
        <Route path="/signup" element={ <Signup />}/>

      </Routes>
  
      
    </div>
 
  );
}

export default App;
