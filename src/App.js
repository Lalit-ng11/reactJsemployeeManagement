// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import ShowData from './Components/ShowData';


function App() {
  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/showdata' element={<ShowData/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
