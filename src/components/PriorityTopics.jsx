import {useEffect,useState} from "react";
import API from "../services/api";

function PriorityTopics(){

const [topics,setTopics] = useState([]);

useEffect(()=>{

 API.get("/topics/priority")
 .then(res=>setTopics(res.data));

},[]);

return(

<div>

<h2>Priority Topics</h2>

<table>

<thead>
<tr>
<th>Topic</th>
<th>Difficulty</th>
<th>Proficiency</th>
</tr>
</thead>

<tbody>

{topics.map(t=>(
<tr key={t.id}>
<td>{t.name}</td>
<td>{t.difficultyLevel}</td>
<td>{t.proficiencyLevel}</td>
</tr>
))}

</tbody>

</table>

</div>

);

}

export default PriorityTopics;