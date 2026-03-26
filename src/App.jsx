import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import "./styles/styles.css";

function App(){

const [user,setUser] = useState(null);
const [showRegister,setShowRegister] = useState(false);

return(

<div>

<Navbar
user={user}
setUser={setUser}
setShowRegister={setShowRegister}
/>

{user ? (

/* AFTER LOGIN SHOW DASHBOARD */

<div className="page">
  <Dashboard user={user}/>
</div>

) : showRegister ? (

/* SHOW REGISTER PAGE */

<Register setShowRegister={setShowRegister}/>

) : (

/* SHOW LOGIN PAGE */

<Login
setUser={setUser}
setShowRegister={setShowRegister}
/>

)}

</div>

)

}

export default App;