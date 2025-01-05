import React from 'react'
import "./login.css"
function Login() {
  return (
    <div className='main'>
        <form action="">
            <h1>Login</h1>
            <div className="textbox">
                <input type="text" placeholder="UserName" required />
                <i className='bx bxs-user'></i>
            </div>
            <div className="textbox">
                <input type="password" placeholder="Password" required />
                <i className='bx bxs-lock-alt'></i>
            </div>

            <div className="checkbox">
                <label> <input type="checkbox" /> Remember Me</label>
                <a href="/">Forget Password</a>
            </div>

            <button className="button" type="submit"> Login</button>
            <div className="register">
                <p>Don't have an account ?
                    <a href="/registration"> Register</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Login;
