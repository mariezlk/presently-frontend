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

function App() {

  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/meineWuensche" element={<MyPresents />}/>
        <Route path="/geschenkeFinden" element={<FindUser />}/>
        <Route path="/geschenkeFinden/:userId" element={<FindPresent />}/>
        <Route path="/help" element={<Help />}/>
      </Routes>
    </Box>
  );
}

export default App;
