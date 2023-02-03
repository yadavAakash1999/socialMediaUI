import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const Apassword = useRef();
  const navigate = useNavigate()
  const clickHandler= async (e)=>{
    e.preventDefault();
    if(password.current.value!==Apassword.current.value){
      Apassword.current.setCustomValidity("Password do not match");
    }
    else{
      const user ={
        username : username.current.value,
        email : email.current.value,
        password : password.current.value,
        
      };
      try{
          await axios.post("http://localhost:8080/api/auth/register",user);
            navigate("/login")
      }catch(err){
          console.log(err);
      }
    }
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={clickHandler}>
            <input placeholder="Username" type="text" required ref={username} className="loginInput" />
            <input placeholder="Email" type="email" ref={email}  className="loginInput" />
            <input placeholder="Password" type="password" minLength="6" ref={password} required className="loginInput" />
            <input placeholder="Password Again" type="password" minLength="6"s ref={Apassword} required className="loginInput" />
            <button className="loginButton" type="submit">Sign Up</button>
            <button onClick={()=>navigate("/login")} className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
