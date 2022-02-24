import {useState} from "react"; 
export default function Hello(){
    const [name,setName]=useState("fubao");

    return (
    <div>
      <h1>state</h1>
      <h2 id="name">{name}</h2>
      <button
      onClick={()=>{
          setName(name==="fubao"?"aibao":"fubao");
      }}
      >
          change
      </button>
    </div>
   
    
    );  
}
