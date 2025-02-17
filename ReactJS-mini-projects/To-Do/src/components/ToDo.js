import { useState } from "react";


const ToDo=()=>{
    const [task,setTask]=useState("")
    const [todos,setTodos]=useState([])
    const handleInput=(e)=>{
        setTask(e.target.value)
    }
    const handleTodos=()=>{
        setTodos([...todos,{text:task,completed:false}])
        setTask("")
    }
    const deleteTask=(curIndex)=>{
        const newTasks=[...todos]
        newTasks.splice(curIndex,1)
        setTodos(newTasks)
    }
    const completeTask=(curIndex)=>{
        const updateTodos=todos.map((item,index)=>(
            curIndex===index?{...item,completed:!item.completed}:item
        ))
        setTodos(updateTodos)
    }
  
    return <>
        <div className="container">
            <div className="hero">
                <div className="input1">
                    <input type="text" placeholder="Enter Your Task" value={task} onChange={handleInput}/>
                    <button className="add-btn" onClick={()=>handleTodos()}>Add</button>
                </div>
                <div className="listItems">
                    <ul>
                        {
                            todos.map((item,index)=>(
                                <div className="items">
                                    <div>
                                        <li key={index} style={{textDecoration: item.completed ? "line-through" : "none"}}>{item.text}</li>
                                    </div>
                                    <div >
                                        <button className=" compTask-btn operations-btns" onClick={()=>completeTask(index)}>Completed</button>
                                        <button className=" delTask-btn operations-btns" onClick={()=>deleteTask(index)}>Delete</button>
                                    </div>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </>
}
export default ToDo;