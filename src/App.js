import { useEffect, useState } from "react";


function App() {
  
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event)=>setToDo(event.target.value);
  const onSubmit = (event)=>{
    event.preventDefault();
    if(toDo===""){
      return;
    }
    setToDos((current)=>[toDo, ...current]);
    setToDo("");
  }
  const onClickC = ()=>{
    setToDos([]);
  }
  useEffect(()=>console.log(toDos), [toDos])
  return (
    <div>
    <h1>To Do list ({toDos.length} works)</h1>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={toDo} type="text" placeholder="Write your todo..."></input>
      <button>Add</button>
      <button onClick={onClickC}>C</button>
    </form>
    <hr/>
    <ul>
      {toDos.map((item, index)=><li key={index}>{item}</li>)}
    </ul>
    </div>
    
  );
}

export default App;
