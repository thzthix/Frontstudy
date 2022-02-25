import {useState} from "react"; 
import UserName from "./UserName";
export default function Hello({age}){
    const [name,setName]=useState("fubao");
    const msg=age>19?"성인입니다.":"미성년자입니다";


    return (
    <div>
      <h1>state</h1>
      <h2 id="name">{name} ({age}세):{msg}
      컴포넌트 안에서는 state 이지만, UserName 한테는 props 입니다 가 핵심이군요</h2>
      <UserName name={name}/>
      <button
      onClick={()=>{
          setName(name==="fubao"?"aibao":"fubao");

      }}
      >
          change
      </button>
    </div>
   
    
    );  
