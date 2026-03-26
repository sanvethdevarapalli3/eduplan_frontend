import {useEffect,useState} from "react";
import API from "../services/api";

function TodayStudy({user}){

const [todaySession,setTodaySession] = useState(null);
const [todayStatus,setTodayStatus] = useState("none");

useEffect(()=>{

 const loadToday = async () => {
  if(!user?.id){
    setTodaySession(null);
    return;
  }

  try {
   const planRes = await API.get(`/plan/user/${user.id}`);
   const planId = planRes.data?.id;
   if(!planId){
     setTodaySession(null);
     return;
   }

   const res = await API.get(`/sessions/plan/${planId}`);
   const today = new Date().toISOString().split("T")[0];

   const session = res.data.find(s => s.studyDate === today);
   if(session){
     setTodaySession(session);
     setTodayStatus("today");
     return;
   }

   // if no session today, show next upcoming session instead
   const upcoming = res.data
     .filter(s => s.studyDate > today)
     .sort((a, b) => a.studyDate.localeCompare(b.studyDate))[0];

   if(upcoming){
     setTodaySession(upcoming);
     setTodayStatus("upcoming");
   } else {
     setTodaySession(null);
     setTodayStatus("none");
   }
  } catch(err){
   console.error("Could not load today session", err);
   setTodaySession(null);
  }
 };

 loadToday();

 const onPlanUpdate = () => loadToday();
 window.addEventListener("planUpdated", onPlanUpdate);
 return () => window.removeEventListener("planUpdated", onPlanUpdate);

},[user]);

return(

<div className="card">

<h3>Today's Study</h3>

{todaySession ? (

<>
<p>
  {todayStatus === "today" && "Today"}
  {todayStatus === "upcoming" && `Next session on ${todaySession.studyDate}`}
</p>
<p>{todaySession?.topic?.name || "Unknown topic"}</p>
<p>{todaySession?.allocatedHours || 0} hours</p>
</>

) : (

<p>No session today or upcoming</p>

)}

</div>

);

}

export default TodayStudy;