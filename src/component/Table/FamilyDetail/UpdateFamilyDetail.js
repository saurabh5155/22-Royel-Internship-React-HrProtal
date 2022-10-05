import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const UpdateFamilyDetail = () => {

    const [data, setdata] = useState('')
    var id = useParams().id

    var navigate = useNavigate();
    const getFamilyDetailById = () => {
        axios.get(`http://localhost:4000/familyDetail/${id}`).then(res => {
            console.log(res.data.data);
            setdata(res.data.data)
        })

    }

    useEffect(() => {
        getFamilyDetailById()
    }, [])

    const [relativeName, setrelativeName] = useState(data.relativeName)
    const [relativeDOB, setrelativeDOB] = useState(data.relativeDOB)
    const [relativeContactNO, setrelativeContactNO] = useState(data.relationContactNO)
    const [gender, setgender] = useState(data.gender)
    const [familyRelationId, setfamilyRelationId] = useState(data.familyRelationId)
    const [userId, setuserId] = useState(data.userId)

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

    var data1 = {
        familyDetailId:id,
        relativeName: relativeName,
        relativeDOB: relativeDOB,
        relativeContactNO: relativeContactNO,
        gender:gender,
        familyRelationId:familyRelationId,
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


    const updateFamilyDetail = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:4000/familyDetail`,data1).then(res=>{
            alert("Family Detail Updated Successfully")
            console.log(res.data);
            navigate('/listFamilyDetail')
        })
    }
  return (
    <div>
        <div className="content-body" style={{ minHeight: 812 }}>
        <div className="container-fluid">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Update Family Detail</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={updateFamilyDetail}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Relative Name</label>
                        <input type="text" className="form-control" placeholder="relative name" defaultValue={data.relativeName} onChange={(e)=>{relationNameHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Relative Date Of Birth</label>
                        <input type="date" className="form-control" defaultValue={data.relativeDOB}  onChange={(e)=>{relationDOBHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Relative Contact Number</label>
                        <input type="number" className="form-control" placeholder="relative number" defaultValue={data.relativeContactNO} onChange={(e)=>{relationContactNOHandler(e)}}/>
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
                        <input type="text" className="form-control" placeholder="Family Relation Id" defaultValue={data.familyRelationId} onChange={(e)=>{familyRelationIdHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">User Id</label>
                        <input type="text" className="form-control" placeholder="User Id" value={localStorage.getItem('userId')} onChange={(e)=>{userIdHandler(e)}}/>
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
