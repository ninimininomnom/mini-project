
import './home.css'
import Admin from './admin'
import User from './user'
import axios from "axios";
import { useEffect, useState } from "react";



function Home () {
    const [sector,setSector] = useState()
    const [reload, setReload] = useState(false)
    const [members,setMembers] = useState()


     // started life cycle here
  useEffect(()=>{
    const responseData = async () =>{
      const response = await axios.get('https://jsd5-mock-backend.onrender.com/members')
      setMembers(response.data)
    }
    responseData()
  }, [reload])

  // update here
  const updateData = async(id, name,lastname,position) =>{
    const response = await axios.put('https://jsd5-mock-backend.onrender.com/members', { id, name, lastname,position})
    console.log(response)
    if ( response.status === 200 ){
      setReload(!reload)
    }
  }


  // create here

  const createData = async (name, lastname,position) => {
    const response = await axios.post('https://jsd5-mock-backend.onrender.com/members',{name, lastname,position})
    console.log(response)
    if ( response.status === 200 ){
      setReload(!reload)
    }
  }

  // delete here

  const deleteData = async (id) => {
    const response = await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`)
    console.log(response)
    if ( response.status === 200 ){
      setReload(!reload)
    }
  }

    let component 
    let text
     if ( sector === 'user'){
        text = 'Home - User Sector'
        component = <User members = {members}/>
     } else if (sector === 'admin'){ 
        text = 'Home - Admin Sector'
        component = <Admin createData = {createData} updateData  = {updateData} deleteData = {deleteData} members ={members}/> 
    }else{
        component = <div></div>
        text = 'React - Assessment'
    }

    return (
    <div className='center'>
        <div className='text'>
            <h1>Generation Thailand </h1>
            <h1>{text}</h1>
        </div>

        <div className='buttons'>
            <button onClick={()=>{setSector('user')}}>User Home Sector</button>
            <button onClick={()=>{setSector('admin')}}>Admin Home Sector</button>
        </div>
        {component}

        
        
    </div>
    )
}

export default Home