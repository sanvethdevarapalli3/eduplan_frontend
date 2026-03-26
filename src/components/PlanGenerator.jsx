import {useState} from "react";
import API from "../services/api";

function PlanGenerator({user}){

    const [startDate,setDate] = useState("");
    const [days,setDays] = useState("");
    
    const generatePlan = async ()=>{
    
     try {
      const res = await API.post("/plan/generate",{
       userId:user.id,
       startDate,
       days,
       hoursPerDay:user.dailyStudyHours
      });
    
      const planId = res.data.id;
      if(planId){
        localStorage.setItem("planId", planId);
        window.dispatchEvent(new Event("planUpdated"));
      }

      alert("Plan Generated");

     } catch (err) {
      console.error(err);
      alert("Failed to generate plan");
     }
    
    };
    
    return(
    <div className="card">
    
    <h3>Generate Plan</h3>
    
    <input
    type="date"
    onChange={(e)=>setDate(e.target.value)}
    />
    
    <input
    placeholder="Days"
    onChange={(e)=>setDays(e.target.value)}
    />
    
    <button onClick={generatePlan}>
    Generate
    </button>
    
    </div>
    );
    }

export default PlanGenerator;