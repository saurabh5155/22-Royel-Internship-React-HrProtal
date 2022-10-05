import axios from 'axios'
import React, { useState } from 'react'

export const AddFamilyDetail = () => {

  
    const [relativeName, setrelativeName] = useState('')
    const [relativeDOB, setrelativeDOB] = useState('')
    const [relativeContactNO, setrelativeContactNO] = useState('')
    const [gender, setgender] = useState('')
    const [familyRelationId, setfamilyRelationId] = useState('')
    const [userId, setuserId] = useState('')

    const relationNameHandler = (e) =>{
        setrelativeName(e.target.value)
        console.log(e.target.value);
    }

    const relationDOBHandler = (e) =>{
        setrelativeDOB(e.target.value)
        console.log(e.target.value);
    }

    const relationContactNOHandler = (e) =>{
        setrelativeContactNO(e.target.value)
        console.log(e.target.value);
    }

    const genderHandler = (e) =>{
        setgender(e.target.value)
        console.log(e.target.value);
    }

    const familyRelationIdHandler = (e) =>{
        setfamilyRelationId(e.target.value)
        console.log(e.target.value);
    }

    const userIdHandler = (e) =>{
        setuserId(e.target.value)
        console.log(e.target.value);
    }

    var data = {
        relativeName: relativeName,
        relativeDOB: relativeDOB,
        relativeContactNO: relativeContactNO,
        gender:gender,
        familyRelationId:familyRelationId,
        userId:userId
    } 

    const addFamilyDetail = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:4000/familyDetail', data).then(res=>{
            console.log(res.data);
        })
        
    }

    console.log("get Id in userDetail",localStorage.getItem('userId'));
    const userID = localStorage.getItem('userId');
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


  return (
    <div>
        <div className="content-body" style={{ minHeight: 812 }}>
        <div className="container-fluid">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add Family Detail</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={addFamilyDetail}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Relative Name</label>
                        <input type="text" className="form-control" placeholder="relative name" onChange={(e)=>{relationNameHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Relative Date Of Birth</label>
                        <input type="date" className="form-control"  onChange={(e)=>{relationDOBHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Relative Contact Number</label>
                        <input type="number" className="form-control" placeholder="relative number" onChange={(e)=>{relationContactNOHandler(e)}}/>
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
                        <label className="form-label">Family Relation Id</label>
                        <input type="text" className="form-control" placeholder="Family Relation Id" onChange={(e)=>{familyRelationIdHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">User Id</label>
                        <input type="text" className="form-control" placeholder="User Id" value={userID} onClick={(e)=>{userIdHandler(e)}}/>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
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
