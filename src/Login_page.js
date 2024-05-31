import React from 'react'
import './styling.css';
import { useNavigate } from 'react-router-dom';
const Login = () => 
{
     const nav=useNavigate();
     const handle_login=()=>{
        nav('/table')
     }
  return (
    <div class="login">
        <fieldset>
          <br/>
          <form onSubmit={handle_login}>
          <div class="content">
    <p class="wel">LOGIN PAGE</p>
    <div><img src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png" 
    alt="User Logo"/></div>
     <br/> 
    <label class="txt">UserName</label><br/><br/> 
   <input type="text" class="ucls" placeholder=" User Name" required></input><br/><br/>
   <label class="pwd">Password</label><br/><br/>
    <input type="password" class="pcls" placeholder=" Password" required/> <br/><br/>
   <a href='#' class="fp">Forgot Password?</a><br/><br/>
    <input type="submit" class="loginbutton" value="Login"/><br/><br/><br/> </div>
    </form>
    </fieldset>
</div>
  )
}

export default Login
