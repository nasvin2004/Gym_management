import React, { useState } from 'react'
import './create.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function Create() {
  const[Mno,setMno]=useState();
  const[Name,setName]=useState();
  const[Dep,setDep]=useState();
  const[Ms,setMs]=useState();
  const[Me,setMe]=useState();

  const navigate=useNavigate()

  const submit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8000/create",{Mno,Name,Dep,Ms,Me})
    .then(res=>{
    console.log(res)
     navigate('/')
    })
    .catch(err=>console.log(err))
  }

  return(
    <div className='Main1'>
      
    <div className='Main2'>
      <h1 id='h3'>ADD MEMBER</h1>
      <form onSubmit={submit}>
      <label>Membership No:</label><br />
      <input type="text"  required onChange={(e)=>setMno(e.target.value) } /><br /> 
      <label>Name:</label><br />
      <input type="text" required onChange={(e)=>setName(e.target.value)} /><br />
      <label>Dep & Year:</label><br />
      <input type="text"  required onChange={(e)=>setDep(e.target.value)} /><br />
      <label>Membership Start Date:</label><br />
      <input type="date" required onChange={(e)=>setMs(e.target.value)} /><br />
      <label>Membership End Date:</label><br />
      <input type="date" required onChange={(e)=>setMe(e.target.value)} /><br />
      <button id='Btn'>SUBMIT</button>
      </form>
    </div>
  </div>
  )
}
