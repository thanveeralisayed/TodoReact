import React from 'react'
import classes from './Todolist.module.css'

function Todolist(props) {

    // props.toDos.map((item)=>{
    //     console.log('from map'+item);
    // })

    const Todos = props.toDos.map((item,pos)=>{
        // console.log(item)
        return(
            <li key={pos}><span><input value={item.status} onChange={(e)=>{ props.setTodos(props.toDos.filter((item2)=>{
                if(item2.id === item.id)
                {
                    item2.status = !(item2.status)
                }
                return item2
            })) }} type="checkbox" name="" id="" /></span>{item.text}</li>
        )
    })
    
    


    const aTodos = props.toDos.map((item3,pos)=>{

        if(item3.status)
        {
            return(
                <li key={pos}>{item3.text}</li>            
            )
        }
        return null
    })

    console.log('Fresh items are'+Todos)
    console.log('true items are'+aTodos)


    return (
        
        <div>
        <div className={classes.Todolist}>
                <h2>Current Tasks</h2>
            <ul>

                {Todos}

            </ul>
        </div>


        <div className={classes.Todolist}>
                <h2>Active Tasks</h2>
            <ul>

                {aTodos}

            </ul>
        </div>



        </div>

    )
}

export default Todolist
