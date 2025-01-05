import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./register.css"
import { redirect } from 'react-router-dom';
function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, password };

        setIsPending(true);
        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
        .then((response) => {
            if (!response.ok) {
                throw new Error ("Something went wrong"); 
            } 
        })
        .then(() => {
            alert("New user added");
            setIsPending(false);
            console.log(user);
            
            navigate("/login");
        })
        .catch((error) => {
            alert(error);
            setIsPending(false);
        });
        };
    
  return (
    <div className='main create'>
        <form onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <div className="textbox">
                <input type="text" placeholder="UserName" value={username} onChange={(e) => {setUsername(e.target.value)}} required />
                <i className='bx bxs-user'></i>
            </div>
            <div className="textbox">
                <input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}} required />
                <i className='bx bxs-lock-alt'></i>
            </div>


            { !isPending && <button className="button" type="submit">Registration</button> }
            { isPending && <button className="button" type="submit" disabled>Adding User...</button> }
            <div className="register">
                <p>Already have an account ?
                    <a href="/login">Login</a>
                </p>
            </div>
        </form>
    </div>
  )
}

export default Register;
