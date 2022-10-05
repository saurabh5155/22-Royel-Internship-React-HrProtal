import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const UpdateLeave = () => {

    const [data, setdata] = useState('')
    var id = useParams().id

    var nevigate = useNavigate()

    const getLeaveById = () =>{
        axios.get(`http://localhost:4000/leave/${id}`).then(res=>{
            setdata(res.data.data)
            console.log(res.data.data);
        })
    }

    useEffect(() => {
      getLeaveById()
    }, [])
    

    const [leaveDate, setleaveDate] = useState(data.leaveDate)
    const [leaveReason, setleaveReason] = useState(data.leaveReason)
    const [leaveApprove, setleaveApprove] = useState(data.leaveApprove)
    const [userId, setuserId] = useState(data.userId)

    const leaveDateHandler = (e) => {
        setleaveDate(e.target.value)
        console.log(e.target.value);
    }

    const leaveReasonHandler = (e) => {
        setleaveReason(e.target.value)
        console.log(e.target.value);
    }

    const leaveApproveHandler = (e) => {
        setleaveApprove(e.target.value)
        console.log(e.target.value);
    }

    const userIdHandler = (e) => {
        setuserId(e.target.value)
        console.log(e.target.value);
    }

    var data1 = {
        leaveId:id,
        leaveDate: leaveDate,
        leaveReason: leaveReason,
        leaveApprove: leaveApprove,
        userId: userId
    }

    const updateLeave = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:4000/leave`,data1).then(res=>{
            console.log(res.data);
            nevigate('/listLeave');
        })
    }

    const genderlabel =[
        {
          value:"0",
          label:"Not Approve"
        },
        {
          value:"1",
          label:"Approve"
        },
      ]     
  return (
    <div>
         <div className="content-body" style={{ minHeight: 812 }}>
        <div className="container-fluid">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Update Leave</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={updateLeave}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Leave Date</label>
                        <input type="date" className="form-control" placeholder="leaveDate" defaultValue={data.leaveDate} onChange={(e)=>{leaveDateHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Leave Reason</label>
                        <input type="text" className="form-control" placeholder="leaveReason" defaultValue={data.leaveReason} onChange={(e)=>{leaveReasonHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                      <label className="form-label">Is Active</label>
                      <select  className="select form-control wide" defaultValue={data.leaveApprove} onClick={(e)=>{leaveApproveHandler(e)}}>
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
                        <label className="form-label">User Id</label>
                        <input type="text" className="form-control" placeholder="userId" value={localStorage.getItem('userId')} onChange={(e)=>{userIdHandler(e)}}/>
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
