import { useState } from "react"
import API from "../services/api"

function Login({ setUser, setShowRegister }) {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const loginUser = async () => {

 try{

  const res = await API.post("/auth/login",{
   email,
   password
  })

  console.log(res.data)

  setUser(res.data)   // store logged-in user
  alert("Login Successful")

 }catch(error){
  console.error(error)
  alert("Invalid Credentials")
 }

}

return(

<div className="auth-container">

<div className="auth-card">

<h2>Login</h2>

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

<button onClick={loginUser}>
Login
</button>

<p className="auth-text">
Don't have an account?
<span
className="auth-link"
onClick={()=>setShowRegister(true)}
>
 Register
</span>
</p>

</div>

</div>

)

}

export default Login