import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LoginComponent = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    const login = () => {
        const payload = users.find(user => user.username === username && user.password === password)

        if (payload) {
            dispatch({
                type: "LOGIN",
                payload
            })
            alert("You've Logged in!")
        } else {
            alert("Wrong Input!")
        }
    }

    return (
        <div>
            <div>
                <form >
                    <h1>Sign In</h1>
                    <input type="name"
                        placeholder='email'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <input
                        type="password"
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <button type='submit' onClick={login}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;