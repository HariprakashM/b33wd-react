import "./App.css";
import { useState } from "react";
export default function App() {
  const people=[
    {
      name:"hp",
      pic:"https://wallpaperaccess.com/full/2213424.jpg"
    },
    {
      name:"aj",
      pic:"https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/alone-Best-Dp-Profile-Images-For-Instagram-photo.gif"
    },
    {
      name:"rj",
      pic:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
  ];
  return (
    <div className="App">
     {people.map(a=>(
     <Op name={a.name} pic={a.pic}/>
     ))}
    
    </div>
  );
  
}
function Op({name,pic}){
  return(
    <div>
      <img src={pic} alt={pic}/>
      <h1>hi,{name}</h1>
      <Counter/>
    </div>
  )
 


}
function Counter(){
  const[like,setLike]= useState(0);
  const[dislike,setdislike]= useState(0);
  return (
    <div>
      <button onClick={()=>setLike(like+1)}>👍{like}</button>
      <button onClick={()=>setdislike(dislike+1)}>👎{dislike}</button>
    </div>
  );
}
