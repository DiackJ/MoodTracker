import { useState } from 'react' ; 
import { Link, useNavigate } from 'react-router-dom';


 function SignupForm(){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [birthMonth, setBirthMonth] = useState("");
    const [birthYear, setBirthYear] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [emailActive, setEmailActive] = useState(false);
    const [passwordActive, setPasswordActive] = useState(false);
    const [nameActive, setNameActive] = useState(false);

    const days = Array.from({length:31}, (_,i) => i + 1); //for birth days
    const currentYear = new Date().getFullYear();
    const years = Array.from({length:100}, (_,i) => (currentYear - 1) - i); //for birth years

    const handelSubmit = async (e) => {
        e.preventDefault();
        
        const formatMonth = birthMonth.toString().padStart(2, "0");
        const formatDay = birthDay.toString().padStart(2, "0");
        const dob = `${birthYear}-${formatMonth}-${formatDay}`; 
        //json response obj
        const formData = { 
            email,
            password,
            name,
            gender,
            dob
        };
        
        console.log(formData);
    //fetch the backend signup endpoint to post a request to sign up and check that the request was successful before 
    //navigating to the dashboard
       try {
            const response = await fetch("http://localhost:8080/auth/signup", {
                method: "POST",
                headers: { 
                "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
                credentials: "include" //for authentication 
            });
            
            if(response.status === 201){
                navigate("/dashboard");
            }else{
                const error = await response.json();
                console.error("sign-up failed:", error.message);
            }
       }catch (err){
            console.error("network error:", err);
       }
    };

    const togglePassword = () => {
        setShowPassword(prev => !prev); 
    };

    const isFormValid = () => {
        if(!name|| !email|| !password){
            return false;
        }
        return true; 
    };

    const isEmailFieldActive = () => {
        setEmailActive(true);
    };

    const isPasswordFieldActive = () => {
        setPasswordActive(true);
    };

    const isNameFieldActive = () => {
        setNameActive(true);
    }

    return (
        <div id="signup-form" className="font-[Nunito]">
            <div className="flex justify-center">
                <h2 className="text-4xl font-bold mt-10 text-indigo-700">Sign Up to join MoodTracker!</h2>
            </div>
            <div className="flex justify-center relative">
                <div id="form-container" className="flex justify-center mt-10 p-5 border border-gray-200 bg-violet-50 rounded-3xl shadow-lg w-100 h-135">
                    <form onSubmit={handelSubmit} >
                        <div>
                            <label htmlFor="email-input" className="">Email</label>
                            <br />
                            <input className="mt-2 pl-2 border border-gray-400 w-70 rounded-b-sm rounded-t-sm" id="email-input" name="email-input" type="email" placeholder="JohnDoe123@gmail.com" onChange={(e) => setEmail(e.target.value)} onFocus={isEmailFieldActive} required />
                            <p className={!email && emailActive ? "text-rose-600 text-sm" : "text-violet-50 text-sm"}>Please input your email</p>
                        
                        </div>
                        <label htmlFor="password-input">Password</label>
                        <br />
                        <div>
                            <input className="border border-gray-400 w-70 rounded-b-sm rounded-t-sm" id="password-input" name="password-input" type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} onFocus={isPasswordFieldActive} required/>
                            <i onClick={togglePassword} className={`absolute -ml-6 mt-1 text-gray-400 cursor-pointer 
                                    ${showPassword ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}`}></i>
                            <p className={!password && passwordActive ? "text-rose-600 text-sm" : "text-violet-50 text-sm"}>Please input a password</p>
                        </div>
                        <div>
                            <label htmlFor="name-input">Name</label>
                            <br />
                            <input className="mt-2 pl-2 border border-gray-400 w-70 rounded-b-sm rounded-t-sm" id="name-input" name="name-input" type="text" placeholder="John" onChange={(e) => setName(e.target.value)} onFocus={isNameFieldActive} required />
                            <p className={!name && nameActive ? "text-rose-600 text-sm" : "text-violet-50 text-sm"}>Please input your name</p>
                        </div>
                        <div className="inline">
                            <label htmlFor="gender-input" className="mr-2">I identify as...</label>
                            <span className="italic text-gray-400">(optional)</span>
                        </div>
                        <div>
                            <select className="mt-2 border pl-2 border-gray-400 rounded-b-sm rounded-t-sm" id="gender-input" name="gender-input" onChange={(e) => setGender(e.target.value.toUpperCase())} required>
                                <option value="">-- Select --</option>
                                <option value="MALE">Male</option>
                                <option vale="FEMALE">Female</option>
                                <option value="NON_BINARY">Non-Binary</option>
                                <option value="OTHER">Other</option>
                                <option value="PREFER_NOT_TO_SAY">Prefer not to say</option>
                            </select>
                        </div>
                        <br />
                        <div className="inline">
                            <label htmlFor="birthday-input" className="mr-2">Date of Birth</label>
                            <span className="italic text-gray-400">(optional)</span>
                        </div>
                        <div className="mt-2">
                            <select className="pl-2 border border-gray-400 rounded-b-sm rounded-t-sm" id="birthday-month" name="birthday-month" onChange={(e) => setBirthMonth(e.target.value)} >
                                <option value="">Month</option>
                                <option value="1">Jan</option>
                                <option value="2">Feb</option>
                                <option value="3">Mar</option>
                                <option value="4">Apr</option>
                                <option value="5">May</option>
                                <option value="6">Jun</option>
                                <option value="7">Jul</option>
                                <option value="8">Aug</option>
                                <option value="9">Sept</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </select>
                        
                            <label htmlFor="birthday-day"></label>
                            <select className="pl-2 border border-gray-400 rounded-b-sm rounded-t-sm" id="birthday-day" name="birthday-day" onChange={(e) => setBirthDay(e.target.value)} >
                                <option value="">Day</option>
                                {days.map((day) => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>
                            <label htmlFor="birthday-year"></label>
                            <select className="pl-2 border border-gray-400 rounded-b-sm rounded-t-sm" id="birthday-year" name="birthday-year" onChange={(e) => setBirthYear(e.target.value)} >
                                <option value="">Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        <br />
                        <div className="flex justify-center relative">
                            <button type="submit" disabled={!isFormValid} className="fixed text-blue-100 font-bold mt-5 rounded-b-md rounded-t-md bg-violet-700 h-10 w-35 hover:text-xl hover:cursor-pointer transition-all">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="login-form-link" className="flex justify-center">
                    <p className="mt-3">Already have an account? <Link to="/" className="text-indigo-700">Login here</Link></p>                
            </div>
        </div>
    );
 }

 export default SignupForm;