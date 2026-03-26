import { useState, useEffect } from "react";
import API from "../services/api";

function TopicForm({ user }) {

const [subjects,setSubjects] = useState([]);
const [subjectId,setSubjectId] = useState("");
const [name,setName] = useState("");
const [difficulty,setDifficulty] = useState("");
const [proficiency,setProficiency] = useState("");

useEffect(()=>{

 API.get("/subjects")
 .then(res => setSubjects(res.data));

},[]);

const addTopic = async()=>{

 await API.post("/topics",{
  name,
  difficultyLevel:difficulty,
  proficiencyLevel:proficiency,
  subject:{id:subjectId}
 });

 alert("Topic Added");

};

return(

<div className="card">

<h3>Add Topic</h3>

<select onChange={(e)=>setSubjectId(e.target.value)}>

<option>Select Subject</option>

{subjects.map((s)=>(
<option key={s.id} value={s.id}>
{s.name}
</option>
))}

</select>

<input
placeholder="Topic"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Difficulty"
onChange={(e)=>setDifficulty(e.target.value)}
/>

<input
placeholder="Proficiency"
onChange={(e)=>setProficiency(e.target.value)}
/>

<button onClick={addTopic}>
Add Topic
</button>

</div>

);

}

export default TopicForm;