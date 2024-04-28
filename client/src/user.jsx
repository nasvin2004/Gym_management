import React,{useState,useEffect} from 'react'
import './user.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function User() {
    const[users,setusers]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000')
    .then(result=>setusers(result.data))
    .catch(err=>console.log(err))
  },[])
  
  const handledelete=(id)=>{
    axios.delete('http://localhost:8000/delete/'+id)
    .then(res=>{console.log(res)
    window.location.reload()}
  )
    .catch(err=>console.log(err))
  }


  return (
    <div className='body'>
         <h1 id ='hc'>MEMBERSHIP DETAILS</h1>
         <Link id="add" to='/create'>NEW MEMBER+</Link>
    <div className='cont'>
        
        <table >
            <thead className='tH' >
            <th>Membership No</th>
            <th>Name</th>
            <th>Dep & Year</th>
            <th>Membership Start Date</th>
            <th>Membership End Date</th>
            <th>Action</th>
            </thead>
            <tbody>{
                users.map((user)=>{
                    return(
                    <tr>
                        <td>{user.Mno}</td>
                        <td>{user.Name}</td>
                        <td>{user.Dep}</td>
                        <td>{user.Ms} (YY-MM-DD)</td>
                        <td>{user.Me} (YY-MM-DD)</td>
                        <td><Link to={`/update/${user._id}`}><button id='btn1'>Edit</button></Link>
                       <button id='btn2' onClick={(e)=>handledelete(user._id)}>Delete</button></td>
                    </tr>
                    )
                }
                )
}
            </tbody>
        </table>
    </div>
    </div>
  )
}
