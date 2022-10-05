import axios from 'axios';
import { ConnectionStates } from 'mongoose';
import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../App';
export const Profile = () => {

  

  const [data, setdata] = useState('')
  const id = localStorage.getItem('userId')
  
  console.log("profile get userID ",localStorage.getItem('userId'));
  
  
  


  var navigate = useNavigate()

 const getUserByID = () => {
     axios.get(`http://localhost:4000/user/${id}`).then(res=>{
         console.log(".........",res.data.data);
         setdata(res.data.data)
     })
 }
 useEffect(() => {
   
 getUserByID()
 }, [])

 const [firstName, setfirstName] = useState(data.firstName)
 const [email, setemail] = useState(data.email)
 const [password, setpassword] = useState(data.password)
 const [roleId, setroleId] = useState(data.roleId)

 const firstNameHandler = (e) =>{
     console.log(e.target.value)
     setfirstName(e.target.value)
 }

 const emailHandler = (e) =>{
     console.log(e.target.value)
     setemail(e.target.value)
 }

 const passwordHandler = (e) =>{
     console.log(e.target.value);
     setpassword(e.target.value)
 }

 const roleIdHandler = (e) =>{
     console.log(e.target.value);
     setroleId(e.target.value)
 }
 const updateUser = (e) =>{

     e.preventDefault()
     var data1 ={
         userId:id,
         firstName:firstName,
         email:email,
         password:password,
         roleId:roleId
     }

     axios.put(`http://localhost:4000/user/`,data1).then(res=>{
         alert("Data is Updated")
         console.log(data1);
     })

    
 }
 
const [listRole, setlistRole] = useState([])

function getListRole() {
   axios.get('http://localhost:4000/roles').then(res => {
       console.log(res.data.data)
       setlistRole(res.data.data)
   })
}

useEffect(() => {

getListRole()
}, [])
// list userDetail

return (
 <div>
 
 
 <div className="content-body" style={{ minHeight: 812 }}>
 <div className="container-fluid">
   <div className="col-xl-12 col-lg-12">
     <div className="card">
       <div className="card-header">
         <h4 className="card-title">Profile</h4>
       </div>
       <div className="card-body">
         <div className="basic-form">
             {
           <form onSubmit={updateUser}>
             <div className="row">
               <div className="mb-3 col-md-6">
                 <label className="form-label">First Name</label>
                 <input type="text" className="form-control" placeholder="role name"defaultValue={data.firstName} onChange={(e)=>{firstNameHandler(e)}} />
               </div>
               <div className="mb-3 col-md-6">
                 <label className="form-label">email</label>
                 <input type="text" className="form-control" placeholder="role name" defaultValue={data.email} onChange={(e)=>{emailHandler(e)}}/>
               </div>
              
               <div className="mb-3 col-md-6">
                      <label className="mb-1"><strong>Role</strong></label>
                                                 
                             <select  className="select form-control wide" defaultValue={data.roleId} onClick={(e)=>{roleIdHandler(e)}} >
                             {/* <option selected>Open this select menu</option> */}
                                {
                                  
                                  listRole.map((role) => {
                                    return (
                                                 
                                       <option value={role._id} >{role.roleName}</option>
                                       )
                                     })
                                   }
                                   </select>
                                                
               </div>
             </div>
             <button type="submit" className="btn btn-primary">Update</button>
           </form>
             }
         </div>
       </div>
     </div>
   </div>

   {/* row */}
   <div className="row">

   </div>
 </div>
</div>

</div>
)
}