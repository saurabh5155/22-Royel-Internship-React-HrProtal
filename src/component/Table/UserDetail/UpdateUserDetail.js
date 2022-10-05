import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const UpdateUserDetail = () => {

  var navigate = useNavigate();

  const [data, setdata] = useState('')
  var id = useParams().id

  const getUserDetailById = (e)=>{
    axios.get(`http://localhost:4000/userDetail/${id}`).then(res=>{
      console.log(res.data.data);
      setdata(res.data.data)
    })
  }

  useEffect(() => {
    getUserDetailById()
  }, [])
  
  const [userSurname, setuserSurname] = useState(data.userSurname)
  const [dateOfBirth, setdateOfBirth] = useState(data.dateOfBirth)
  const [bloodGroup, setbloodGroup] = useState(data.bloodGroup)
  const [gender, setGender] = useState(data.gender)
  const [maritalStatus, setmaritalStatus] = useState(data.maritalStatus)
  const [dateOfAnniversary, setdateOfAnniversary] = useState(data.dateOfAnniversary)
  const [dateOfJoin, setdateOfJoin] = useState(data.dateOfJoin)
  const [isActive, setisActive] = useState(data.isActive)
  const [user, setuser] = useState(data.user)

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

  const userHandler = (e) =>{
    setuser(e.target.value)
    console.log(e.target.value);
  }

  const updateUserDetail = (e) =>{
    var data1={
      userDetailId:id,
      userSurname:userSurname,
      dateOfBirth:dateOfBirth,
      bloodGroup:bloodGroup,
      gender:gender,
      maritalStatus:maritalStatus,
      dateOfAnniversary:dateOfAnniversary,
      dateOfJoin:dateOfJoin,
      isActive:isActive,
      user:user
  
    }

    axios.put(`http://localhost:4000/userDetail`,data1).then(res=>{
      console.log("Data Updated",data1);
      alert("Data Updated")
    })
    navigate('/listUserDetail')
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

 
  return (
    <div>
        <div className="content-body" style={{ minHeight: 812 }}>
      <div className="container-fluid">
        <div className="col-xl-12 col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add UserDetail</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={updateUserDetail}>
                  <div className="row">
                    <div className="mb-3 col-md-6">
                      <label className="form-label">User Surname</label>
                      <input type="text" className="form-control" placeholder="userSurname" defaultValue={data.userSurname} onChange={(e)=>{userSurnameHandler(e)}}/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">Date Of Birth</label>
                      <input type="date" className="form-control" defaultValue={data.dateOfBirth} onChange={(e)=>{dateOfBirthHandler(e)}}/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">Gender</label>
                      <select  className="select form-control wide" defaultValue={{value:genderlabel[1]}} onClick={(e)=>{genderHandler(e)}}>
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
                      <select  className="select form-control wide" defaultValue={data.maritalStatus}  onClick={(e)=>{maritalStatusHandler(e)}}>
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
                      <input type="date" className="form-control" defaultValue={data.dateOfAnniversary} onChange={(e)=>{dateOfAnniversaryHandler(e)}}/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">Date Of Join</label>
                      <input type="date" className="form-control" defaultValue={data.dateOfJoin} onChange={(e)=>{dateOfJoinHandler(e)}}/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">isActive</label>
                      <select  className="select form-control wide" defaultValue={data.isActive}  onClick={(e)=>{isActiveHandler(e)}}>
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
                      <input type="text" className="form-control" placeholder="bloodGroup" defaultValue={data.bloodGroup} onChange={(e)=>{bloodGroupHandler(e)}}/>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label className="form-label">User</label>
                      <input type="text" className="form-control" placeholder="User" value={localStorage.getItem('userId')} onChange={(e)=>{userHandler(e)}}/>
                    </div>                    

                  </div>
                  <button type="submit" className="btn btn-primary">Update</button>
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
