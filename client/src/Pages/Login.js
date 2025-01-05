import React, { useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom';
function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isPending, setIsPending] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { username, password };

        setIsPending(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
            })
            .then(() => {
                alert("User Login");
                setIsPending(false);
                console.log(user);

                // Save login state to localStorage
                
                localStorage.setItem('isLogged', 'true');
                navigate("/");
            })
            .catch((error) => {
                alert(error);
                setIsPending(false);
            });
    };

    return (
        <div className='main'>
            <form action="" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="textbox">
                    <input type="text" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <i className='bx bxs-user'></i>
                </div>
                <div className="textbox">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <i className='bx bxs-lock-alt'></i>
                </div>

                <div className="checkbox">
                    <label> <input type="checkbox" /> Remember Me</label>
                    <a href="/">Forget Password</a>
                </div>

                {!isPending && <button className="button" type="submit"> Login</button>}
                {isPending && <button className="button" type="submit"> isPending</button>}
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
