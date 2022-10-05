import React from 'react';
import {Routes,Route} from "react-router-dom";
import { useEffect } from 'react';
import { Login } from './component/Login';
import { AddUserDetail } from './component/Table/UserDetail/AddUserDetail';
import { User } from './component/User';
import { AdminDeshbord } from './component/Users/Admin/AdminDeshbord';
import { EmployeeDeshbord } from './component/Users/Employee/EmployeeDeshbord';
import { HrDeshbord } from './component/Users/Hr/HrDeshbord';
import { useState, createContext } from 'react';


import axios from 'axios';

export const UserContext = createContext();

function App() {

  const [auth, setauth] = useState(false)
  const [roleId, setroleId] = useState(false)
  const [role, setrole] = useState(false)
  const [password, setpassword] = useState(false)
  const [userId, setuserId] = useState('')
  const [userData, setuserData] = useState([])

  const getUserData = async()=>{

    if(userId){
      await axios.get(`http://localhost:4000/user/${userId}`).then((res)=>{
        setuserData(res.data.data)
        console.log("userdata in app.js",res.data.data);
      })
    }
  }

  useEffect(() => {
    getUserData()
  }, [])
  

  useEffect(async() => {
    let email= localStorage.getItem('email')
    let roleId= localStorage.getItem('roleId')
    let role= localStorage.getItem('role')
    let userId= localStorage.getItem('userId')
    let password= localStorage.getItem('password')


    setroleId(roleId)
    setrole(role)
    setuserId(userId)
    setpassword(password)

    console.log("email in app.js",email);
    console.log("role in app.js",roleId);
    console.log("userId in app.js",userId);
    console.log("password in app.js",password);

    if(email && roleId){
      setauth(true)
      console.log("true",setauth);
    }
    else{
      setauth(false)
      console.log("false",setauth);
    }

  }, [])

  
  
  useEffect(() => {
    
    localStorage.setItem('user_auth',auth)
  }, [auth])

  useEffect(() => {
    setuserId(userId)
    
    localStorage.setItem('userId',userId)
    return () => {
      
      console.log('return UserId',userId);
    }
  }, [userId])
  
  const authenticate = (auth,roleId,userId)=>{
    setauth(auth)
    setuserId(userId)
    setroleId(roleId)

  }
  // if(!userId){
  //   return(
  //     <>
  //     <BeatLoader/>
  //     </>
  //   )
  // }

  console.log("UserID in App.js",userId)
  console.log("UserID in App.js",userData)

  
  return (
    <div>
      <UserContext.Provider value={userData}>
    <Routes>
      
       <Route path='/' element={<Login authenticate={authenticate}/>}></Route>
       <Route path='/login' element={<Login authenticate={authenticate}/>}></Route>

       <Route path='/signUp' element={<User/>}></Route>

       <Route path='/adminDeshBord/*' element={<AdminDeshbord/>}></Route>
       <Route path='/hrDeshbord/*' element={<HrDeshbord/>}></Route>
       <Route path='/employeeDeshbord/*' element={<EmployeeDeshbord/>}></Route>

       <Route path='/addUserDetail' element={<AddUserDetail/>}></Route>
      

    
    </Routes>
    </UserContext.Provider>
    </div>
  );
}

export default App;
