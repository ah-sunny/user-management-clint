import { useEffect, useState } from "react";


const Users = () => {
const [users,setUsers] = useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res=>res.json())
    .then(data=> setUsers(data))
},[])


    return (
        <div>
            <h1>All users  : {users.length} </h1>
        <div>
            {users.map(user => <li key={user.id}> 
            {user.id} name : {user.name} , Email : {user.email}
            </li>)

            }
        </div>
            
        </div>
    );
};

export default Users;