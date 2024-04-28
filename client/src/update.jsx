import React from 'react'
import './create.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'



export default function Update() {
 
  const {id}=useParams()

  const[Mno,setMno]=useState();
  const[Name,setName]=useState();
  const[Dep,setDep]=useState();
  const[Ms,setMs]=useState();
  const[Me,setMe]=useState();
 
  const navigate=useNavigate()

  
  useEffect(()=>{
    axios.get('http://localhost:8000/getUser/'+id)
    .then(result=>{console.log(result)
      setMno(result.data.Mno)
      setName(result.data.Name)
      setDep(result.data.Dep)
      setMs(result.data.Ms)
      setMe(result.data.Me)
    })
    .catch(err=>console.log(err))
  },[])

const update=(e)=>{
  e.preventDefault()
  axios.put("http://localhost:8000/update/"+id,{Mno,Name,Dep,Ms,Me})
  .then(res=>{
  console.log(res)
   navigate('/')
  })
  .catch(err=>console.log(err))
}




  return (
    <div className='Main1'>
      
    <div className='Main2'>
      <h1 id='h3'>UPDATE CHANGES</h1>
      <form onSubmit={update}>
      <label>Membership No:</label><br />
      <input type="text" value={Mno} onChange={(e)=>setMno(e.target.value)}/><br /> 
      <label>Name:</label><br />
      <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}/><br />
      <label>Dep & Year:</label><br />
      <input type="text" value={Dep} onChange={(e)=>setDep(e.target.value)}/><br />
      <label>Membership Start Date:</label><br />
      <input type="date" value={Ms} onChange={(e)=>setMs(e.target.value)} /><br />
      <label>Membership End Date:</label><br />
      <input type="date" value={Me} onChange={(e)=>setMe(e.target.value)}/><br />
      <button id='Btn'>UPDATE</button>
      </form>
    </div>
  </div>
  )
}
