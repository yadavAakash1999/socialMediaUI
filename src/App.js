import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from "./pages/login/Login";
import Register from './pages/register/Register';
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
function App() {

  const {user} = useContext(AuthContext)
  
  return (
    
       <Routes>
          <Route path="/" element={user ?<Home />: <Navigate replace to="/register"/>}/>
          <Route path="/register" element={user ? <Navigate replace to="/"/> :<Register />}/>
          <Route path="/login" element={user ? <Navigate replace to="/"/> :<Login />}/>
          <Route path="/profile/:username" element={<Profile/>}/>
        </Routes>
    
  )
}

export default App;
