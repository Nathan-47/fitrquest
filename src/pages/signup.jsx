import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import logo from "../images/fitrquest_logo.svg"

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()


    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(name, email, password)
    }


    return (
        <div className="col-12" id="signup-wrapper">
        <form className="signup" onSubmit={handleSubmit}>

            <img className="login-logo" src={logo} alt="fitrquest logo" />

            <h3 className="auth-title">Sign up</h3>
            <label>Name:</label>
            <input
            className="input-box"
            type="name"
            placeholder="Thierry Henry"
            // onchange handler so that when change happens we want to update the name state
            onChange={(e) => setName(e.target.value)}
            value={name}
            />

            <label>Email:</label>
            <input
            className="input-box"
            type="email"
            placeholder="theking14@gmail.com"
            // onchange handler so that when change happens we want to update the email state
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />

            <label>Password:</label>
            <input
            type="password"
            className="password-input"
            placeholder="Password"
            // onchange handler so that when change happens we want to update the password state   
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />

        <button className="auth-btn" disabled={isLoading}>Sign Up</button>  
        {error && <div className="error">{error}</div>}
        </form>

            <p className="no-login">Already signed up? <a className="account-link" href="https://fitrquest-frontend.onrender.com/login">Login</a>
            </p>
        </div>
    )
}

export default Signup;