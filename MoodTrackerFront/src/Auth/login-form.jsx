import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [failStatus, setFailStatus] = useState(false); 
    const [emailActive, setEmailActive] = useState(false);
    const [passwordActive, setPasswordActive] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const formData = {
            email,
            password
        }

        try{
            const res = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(formData)
            });

            if(res.status === 200){
                navigate("/dashboard");
            }else if(res.status === 403){
                setFailStatus(true); 
            }else{
                const err = await res.json();
                console.error("login error: ", err); 
            }
        }catch (err){
            console.error("network error: ", err);
        }
    };

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    const isEmailFieldActive = () => {
        setEmailActive(true);
    };

    const isPasswordFieldActive = () => {
        setPasswordActive(true); 
    }

    return (
        <div id="login-form" className="font-[Nunito]">
            <div className="flex justify-center">
                <h1 id="welcome" className="text-4xl mt-10 font-extrabold text-indigo-700">Welcome Back to MoodTracker!</h1>
            </div>
            <div className="flex justify-center">
                <h1 id="login-header" className="text-3xl font-medium mt-10">Login</h1>
            </div>
            <div className="flex justify-center">
                <div id="login-form-container" className="flex justify-center border border-gray-100 h-90 bg-violet-50 w-90 mt-10 rounded-4xl shadow-lg pt-5">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input className="pl-2 mt-2 border border-gray-400 rounded-b-sm rounded-t-sm w-60" onFocus={isEmailFieldActive} type="text" id="email" name="email" placeholder="johnDoe123@gmail.com" onChange={(e) => setEmail(e.target.value)} required />
                        <p className={!email && emailActive ? "text-rose-600 text-sm" : "text-violet-50 text-sm"}>Please input your email</p>
                        <br />
                        <label htmlFor="password-input">Password</label>
                        <br />
                        <div>
                            <input className="pl-2 border border-gray-400 w-60 rounded-b-sm rounded-t-sm mt-2" onFocus={isPasswordFieldActive} type={showPassword ? "text" : "password"} id="password-input" name="password-input" onChange={(e) => setPassword(e.target.value)}required />
                             <i onClick={togglePassword} className={`absolute -ml-6 mt-3 text-gray-400 cursor-pointer 
                                ${showPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}`}></i>
                                {failStatus && (
                                    <p className="text-rose-600 text-sm">Incorrect email or password. Try again</p>
                                )}
                                <p className={!password && passwordActive ? "text-rose-600 text-sm" : "text-violet-50 text-sm"}>Please input your password</p>
                        </div>
                        <p className="text-xs" id="forgot-password">Forgot your password? Click<a className="text-violet-500" id="reset-password" href=""> here.</a></p>
                        <br />
                        <div className="flex justify-center">
                            <button className="mt-5 w-30 h-12 text-blue-100 font-bold border border-violet-700 bg-violet-700 rounded-b-md rounded-t-md hover:h-14 transition-all hover:w-35 hover:cursor-pointer hover:text-xl" type="submit" id="login-button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="signup" className="flex justify-center">
                <p className="mt-3" id="signup-text">Don't have an account? <Link to="auth/signup" className="text-indigo-700">Signup here.</Link></p>
            </div>
        </div>
    )
}

export default LoginForm;

//show: <i class="fa-regular fa-eye"></i>
//don't show <i class="fa-regular fa-eye-slash"></i>