import React from 'react'
import classes from './Todobox.module.css'
import {useState} from 'react'

function Todobox(props) {
    // console.log(props)
    let [toDo,setTodo] = useState([])
    // console.log(toDo);
    return (
        <div className={classes.boxwrap}>
            < input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" />
            <button 
            onClick={()=>props.setTodos([...props.toDos,{id:Date.now(),
            text:toDo,status:false}])}>Add to List</button>
            
        </div>
    )
}

export default Todobox
