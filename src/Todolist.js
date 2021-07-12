import React from 'react'
import classes from './Todolist.module.css'

function Todolist(props) {

    const Todos = props.toDos.map((item,pos)=>{
        return(
            <li key={pos}><span><input value={item.status} onChange={(e)=>{console.log(e.target)}} type="checkbox" name="" id="" /></span>{item.text}</li>
        )
    })     


    return (
        <div className={classes.Todolist}>
            <ul>

                {Todos}

            </ul>
        </div>
    )
}

export default Todolist
