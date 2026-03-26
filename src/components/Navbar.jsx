function Navbar({ user, setUser }) {

    if(!user) return null;   // hide navbar if not logged in
    
    return(
    
    <div className="navbar">
    
    <div className="logo">
    <span>Edu</span><span className="plan">Planner</span>
    </div>
    
    <div className="nav-right">
    
    <button
    className="nav-btn"
    onClick={()=>setUser(null)}
    >
    Sign Out
    </button>
    
    </div>
    
    </div>
    
    );
    
    }
    
    export default Navbar;