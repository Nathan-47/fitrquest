import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import logo from "../images/fitrquest_logo.svg"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()


    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password)
    }


    return (
        <div className="col-12" id="login-wrapper">
        <form className="login" onSubmit={handleSubmit}>

            <img className="login-logo" src={logo} alt="fitrquest logo" />

            <h3 className="login-title">Login</h3>
            <label>Email</label>
            <input
            className="email-input"
            type="email"
            placeholder="Email"
            // onchange handler so that when change happens we want to update the email state
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />

            <label>Password</label>
            <input
            className="password-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />

            {/* // while button is loading button cannot be pressed */}
            <button className="login-btn" disabled={isLoading}>Login</button>
            {error && <div className="error">{error}</div>}
        </form>

            <p className="no-login">Don't have an account? <a className="account-link" href="http://localhost:5173/signup">Sign Up</a></p>
        </div>
    )
}

export default Login;