import classes from './App.module.css'
import {useState} from 'react'
import Todobox from './Todobox'
import Todolist from './Todolist'


function App() {

  const [toDos,setTodos] = useState([])

  // console.log(toDos)

  return (
    <div className={classes.app}>
      
      <div className ={classes.Todobox}>
            <Todobox toDos={toDos} setTodos={setTodos}/>
      </div>

      <div className={classes.Todolist}>
            <Todolist setTodos={setTodos} toDos={toDos} />
      </div>


    </div>
  );
}

export default App;
