import {useState} from "react";
import API from "../services/api";

function SubjectForm({user}){

    const [name,setName] = useState("");
    
    const addSubject = async ()=>{
    
     await API.post(`/subjects/${user.id}`,{name});
    
     alert("Subject Added");
    
    };
    
    return(
    <div className="card">
    
    <h3>Add Subject</h3>
    
    <input
    placeholder="Subject Name"
    onChange={(e)=>setName(e.target.value)}
    />
    
    <button onClick={addSubject}>
    Add
    </button>
    
    </div>
    );
    }

export default SubjectForm;