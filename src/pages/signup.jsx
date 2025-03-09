import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

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
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>

            <label>Name:</label>
            <input
            type="name"
            // onchange handler so that when change happens we want to update the name state
            onChange={(e) => setName(e.target.value)}
            value={name}
            />

            <label>Email:</label>
            <input
            type="email"
            // onchange handler so that when change happens we want to update the email state
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />

            <label>Password:</label>
            <input
            type="password"
            // onchange handler so that when change happens we want to update the password state   
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />

        <button disabled={isLoading}>Sign Up</button>  
        {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup;