import React,{useState} from "react";
import API from "../api";


const Users = ()=>{
    // console.log(API.users.fetchAll());
    const [users, setUsers ] = useState(API.users.fetchAll())
   const halsDecrement = (id)=>{
      
      setUsers(prevState=>prevState.filter((tag)=> tag !== id))
   }

   const halsNumber = ()=>{
  if(users.length > 0){
    return <span  className="badge bg-primary m-0 fs-4">{users.length + ' человек тусанёт сегодня с тобой'}</span>
  } else if(users.length === 0){
    const table = document.querySelector('table')
    const tr = table.querySelector('tr')
    tr.style.display = 'none'
    return <span className="badge bg-warning m-0 fs-4">{'никто сегодня с тобой не тусанёт'}</span>
    
  }
      
    
   }
   
    
   return (
    
   <table class="table  table-striped ">
   
  <thead>
  {halsNumber()}
    
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Качества</th>
      <th scope="col">Профессия</th>
      <th scope="col">Встретился,раз</th>
      <th scope="col">Оценка</th>
    </tr>
  </thead>
  <tbody>
    { users.map((user,index,array)=>
    
    (<tr id={user._id}> 
        <th >{user.name} </th>  
        <td >{user.qualities.map(usert=>  <span className={'badge bg-'+usert.color+ ' m-1'}>{usert.name}</span>)}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <button type="button" class="btn btn-danger bg-danger btn-sm m-1" onClick={()=>halsDecrement(user)}>delete</button>
        
       </tr>)
    
       
        )} 
       
        
       
    
  </tbody>
</table>)
}

export default Users