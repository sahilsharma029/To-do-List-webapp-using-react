import { useState } from "react"
import './App.css';
export default function TodoList()
{
    let [todos, settodos] = useState([""]);
    let [newtodo, setnewtodo]= useState("");
    let addnewtodo = () =>{
        settodos([...todos,newtodo]);
    };
    let updatedtodo = (event) =>{
        setnewtodo(event.target.value);
    };
    
    return(
        <div>
            <input className="inp" type="text" placeholder="Add a task" value={newtodo} onChange={updatedtodo}/>
            <button onClick={addnewtodo}>Add task</button>
            <br /><br /><br />
            <hr />
            <h4>Task Todo</h4>
            <ul>
                {todos.map((todo) => {
                    return <li>{todo}</li>;
                })}
            </ul>
        </div>
    )
}