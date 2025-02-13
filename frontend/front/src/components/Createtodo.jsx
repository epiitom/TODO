import {useState} from "react";

export function CreateTodo(props){
  //we are creating function which take two inputs title and description and then 
  // use add button to add it to the backend
  const [title,setTitle] = useState("");
  const [description,setDes] = useState("");

  return(
    <div>
      <input 
        id ="title" 
        type = "text"
        placeholder="title" 
        onChange={function(e){
          const value = e.target.value;
          setTitle(value);
        }} 
        ></input>  <br/>
        <input id= "description"
        type = "text"
        placeholder="Description"
         onChange ={(e) =>
          setDes(e.target.value) 
       }  
        ></input> <br/>

        <button
         onClick ={() => {
          fetch("http://localhost:3000/todo",{
            method: "POST",
            body:JSON.stringify({
              title: title,
              description: description 
          }),
          headers:{
            "Content-type": "application/json"
          }
          })
          .then(async function(res) {
            const json = await res.json();
            alert("Todo added");
          })
         }}> Add a todo </button>
    </div>
  )
}