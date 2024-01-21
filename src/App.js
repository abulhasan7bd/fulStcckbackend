import { useEffect, useState } from "react";
import "./App.css";
import { getAllData, insertTodo } from "./api";

function App() {

  const [text, setText] = useState("");
  
  const [todo, setTodos] = useState();
  const [isUpdating,setIsupdating]=useState(false);

  useEffect(() => {
    getAllData(setTodos);
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    insertTodo(text,setText,setTodos,todo)
    console.log('adtodo')

  };
  const updateTodo = (e) => {
    e.preventDefault();
    console.log("update todo")

  };

  return (
    <div className="App">
      <h1>Todo app</h1>

      <form>
        <input
          type="text"
          placeholder="type here ...."
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={ isUpdating ? updateTodo : addTodo }>{isUpdating ? "Update" :"Add"}</button>
      </form>
      <div
      style={{width:'500px'}}>
        {
         todo && todo.map((item,index)=>{
            return (
              <div key={index} style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
              <h1>{item.name}</h1>
              <button>Edit</button>
              <button>Delet</button>
            </div>
            )
          })
        }
       
      </div>
    </div>
  );
}

export default App;
