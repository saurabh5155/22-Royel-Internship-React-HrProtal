import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const AddUserDetail = () => {

  const id = useParams.id

  const [userSurname, setuserSurname] = useState('')
  const [dateOfBirth, setdateOfBirth] = useState('')
  const [bloodGroup, setbloodGroup] = useState('')
  const [gender, setGender] = useState('')
  const [maritalStatus, setmaritalStatus] = useState('')
  const [dateOfAnniversary, setdateOfAnniversary] = useState('')
  const [dateOfJoin, setdateOfJoin] = useState('')
  const [isActive, setisActive] = useState('')
  const [userId, setuserId] = useState('')

  var navigate = useNavigate();

  const userSurnameHandler = (e) =>{
    setuserSurname(e.target.value)
    console.log(e.target.value);
  }

  const dateOfBirthHandler = (e) =>{
    setdateOfBirth(e.target.value)
    console.log(e.target.value);
  }
  
  const bloodGroupHandler = (e) =>{
    setbloodGroup(e.target.value)
    console.log(e.target.value);
  }

  const genderHandler = (e) =>{
    setGender(e.target.value)
    console.log(e.target.value);
  }

  const maritalStatusHandler = (e) =>{
    setmaritalStatus(e.target.value)
    console.log(e.target.value);
  }

  const dateOfAnniversaryHandler = (e) =>{
    setdateOfAnniversary(e.target.value)
    console.log(e.target.value);
  }

  const dateOfJoinHandler = (e) =>{
    setdateOfJoin(e.target.value)
    console.log(e.target.value);
  }

  const isActiveHandler = (e) =>{
    setisActive(e.target.value)
    console.log(e.target.value);
  }

  const userIdHandler = (e) =>{
    setuserId(e.target.value)
    console.log(e.target.value);
  }

  console.log("get Id in userDetail",localStorage.getItem('userId'));
  const userID = localStorage.getItem('userId');
  var data={
    userSurname:userSurname,
    dateOfBirth:dateOfBirth,
    bloodGroup:bloodGroup,
    gender:gender,
    maritalStatus:maritalStatus,
    dateOfAnniversary:dateOfAnniversary,
    dateOfJoin:dateOfJoin,
    isActive:isActive,
    userId:userId
  }

  const genderlabel =[
    {
      value:"male",
      label:"Male"
    },
    {
      value:"female",
      label:"Female"
    },
    {
      value:"other",
      label:"Other"
    }
  ]

  const maritalStatuslabel=[
    {
      value:"1",
      label:"I am Married"
    },
    {
      value:"0",
      label:"I am Not Married"
    }
  ]

  const isActivelabel=[
    {
      value:"1",
      label:"Working on"
    },
    {
      value:"0",
      label:"Out"
    }
  ]


  const addUserDetail = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:4000/userDetail`,data).then(res=>{
      console.log(res.data);
    })
    
  }

  return (
    <div>
     
     <div className="content-body" style={{ minHeight: 812 }}>
        <div className="container-fluid">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add User Detail</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                <form onSubmit={addUserDetail}>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label">User Surname</label>
                      <input type="text" className="form-control" placeholder="userSurname" onChange={(e)=>{userSurnameHandler(e)}}/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">Date Of Birth</label>
                      <input type="date" className="form-control"  onChange={(e)=>{dateOfBirthHandler(e)}}/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">Gender</label>
                      <select  className="select form-control wide"  onClick={(e)=>{genderHandler(e)}}>
                                <option selected>Open this select menu</option>
                                   {
                                     
                                     genderlabel.map((gender) => {
                                       return (
                                                    
                                          <option value={gender.value} >{gender.label}</option>
                                          )
                                        })
                                      }
                                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">Marital Status</label>
                      <select  className="select form-control wide"  onClick={(e)=>{maritalStatusHandler(e)}}>
                                <option selected>Open this select menu</option>
                                   {
                                     
                                     maritalStatuslabel.map((marry) => {
                                       return (
                                                    
                                          <option value={marry.value} >{marry.label}</option>
                                          )
                                        })
                                      }
                                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">Date Of Anniversary</label>
                      <input type="date" className="form-control"  onChange={(e)=>{dateOfAnniversaryHandler(e)}}/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">Date Of Join</label>
                      <input type="date" className="form-control"  onChange={(e)=>{dateOfJoinHandler(e)}}/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">isActive</label>
                      <select  className="select form-control wide"  onClick={(e)=>{isActiveHandler(e)}}>
                                <option selected>Open this select menu</option>
                                   {
                                     
                                     isActivelabel.map((isActive) => {
                                       return (
                                                    
                                          <option value={isActive.value} >{isActive.label}</option>
                                          )
                                        })
                                      }
                                      </select>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">Blood Group</label>
                      <input type="text" className="form-control" placeholder="bloodGroup" onChange={(e)=>{bloodGroupHandler(e)}}/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">User</label>
                      <input type="text" className="form-control" placeholder="User" value={userID} onClick={(e)=>{userIdHandler(e)}}/>
                    </div>                    

                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Add</button>
                </form>
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
