import { Box } from '@mantine/core';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MyPresents from './components/myPresents/MyPresents';
import FindUser from './components/findUser/FindUser';
import FindPresent from './components/findPresent/FindPresent';
import Login from './components/login+register/Login';
import Register from './components/login+register/Register';
import Help from './components/help/Help';
import { useEffect, useState } from 'react';
import { useNavigate} from "react-router-dom";

function App() {

  const navigate = useNavigate();
  const location = useLocation();


  const [currentUser, setCurrentUser] = useState(1)
  const [searchedUser, setSearchedUser] = useState()

  useEffect(() => {
      if (!location.pathname.startsWith('/geschenkeFinden')) return;
      
      if (searchedUser != undefined) {
          navigate(`/geschenkeFinden/${searchedUser?.id}`)
          return;
      }
      navigate('/geschenkeFinden')
  }, [searchedUser])

  return (
    <Box>
      {(!location.pathname.startsWith('/login') && !location.pathname.startsWith('/register')) && <Navbar/>}
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/meineWuensche" element={<MyPresents currentUser={currentUser} />}/>
        <Route path="/geschenkeFinden" element={<FindUser currentUser={currentUser} searchedUser={searchedUser} setSearchedUser={setSearchedUser}/>}/>
        <Route path="/geschenkeFinden/:userId" element={<FindPresent searchedUser={searchedUser}/>}/>
        <Route path="/help" element={<Help />}/>
      </Routes>
    </Box>
  );
}

export default App;
