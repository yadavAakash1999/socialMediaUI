import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from "./pages/login/Login";
import Register from './pages/register/Register';
import {
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/profile/:username" element={<Profile/>}/>
        </Routes>
    
  )
}

export default App;