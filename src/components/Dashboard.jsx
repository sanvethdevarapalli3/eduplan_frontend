import SubjectForm from "./SubjectForm";
import TopicForm from "./TopicForm";
import PlanGenerator from "./PlanGenerator";
import Timetable from "./Timetable";
import PriorityTopics from "./PriorityTopics";
import TodayStudy from "./TodayStudy";

function Dashboard({user}){

return(

<div className="dashboard">

<h1>Welcome {user.name}</h1>

<h3>Ready to make your timetable</h3>

<div className="grid">

<SubjectForm user={user}/>
<TopicForm user={user}/>
<PlanGenerator user={user}/>

</div>

<Timetable user={user}/>

<PriorityTopics/>

<h3>Todays Goal </h3>

<TodayStudy user={user}/>

<div className="grid"></div>

</div>

)

}

export default Dashboard;





