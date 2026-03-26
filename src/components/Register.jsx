import { useState } from "react";
import API from "../services/api";

function Register({ setShowRegister }) {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [dailyStudyHours,setDailyStudyHours] = useState("");

const registerUser = async () => {

 try{

  const res = await API.post("/auth/register",{
   name,
   email,
   password,
   dailyStudyHours
  });

  console.log(res.data);
  alert("User Registered Successfully");

 }catch(error){
  console.error(error);
  alert("Registration Failed");
 }

};

return(

<div className="auth-container">

<div className="auth-card">

<h2>Create Account</h2>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<input
placeholder="Daily Study Hours"
value={dailyStudyHours}
onChange={(e)=>setDailyStudyHours(e.target.value)}
/>

<button onClick={registerUser}>
Create Account
</button>

<p className="auth-text">
Already have an account?
<span
className="auth-link"
onClick={()=>setShowRegister(false)}
>
 Login
</span>
</p>

</div>

</div>

)

}

export default Register