import { useEffect, useState } from "react";
import API from "../services/api";

function Timetable({user}){

    const [sessions,setSessions] = useState([]);

    const loadSessions = async ()=>{
      if(!user?.id){
        setSessions([]);
        return;
      }

      try {
        const planRes = await API.get(`/plan/user/${user.id}`);
        const planId = planRes.data?.id;
        if(!planId){
          setSessions([]);
          return;
        }

        const res = await API.get(`/sessions/plan/${planId}`);
        setSessions(res.data);
      } catch (err) {
        console.error("Could not load sessions", err);
        setSessions([]);
      }
    };

    useEffect(()=>{
     loadSessions();

     const onPlanUpdate = () => loadSessions();
     window.addEventListener("planUpdated", onPlanUpdate);
     return () => window.removeEventListener("planUpdated", onPlanUpdate);
    },[user]);
    
    const complete = async(id)=>{
    
     await API.put(`/sessions/complete/${id}`);
    
     loadSessions();   // refresh table
    
    };
    
    return(
    <div>
    
    <h2>Study Timetable</h2>
    
    <table>
    
    <thead>
    <tr>
    <th>Date</th>
    <th>Topic</th>
    <th>Hours</th>
    <th>Status</th>
    </tr>
    </thead>
    
    <tbody>
    
    {sessions.map((s)=>(
    <tr key={s.id}>
    
    <td>{s.studyDate}</td>
    <td>{s.topic.name}</td>
    <td>{s.allocatedHours}</td>
    
    <td>
    {s.completed ?
    "Completed"
    :
    <button onClick={()=>complete(s.id)}>
    Complete
    </button>
    }
    </td>
    
    </tr>
    ))}
    
    </tbody>
    
    </table>
    
    </div>
    );
    }
export default Timetable;