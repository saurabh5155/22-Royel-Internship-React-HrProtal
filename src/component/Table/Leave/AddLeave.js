import axios from 'axios'
import React, { useState } from 'react'


export const AddLeave = () => {

    const [leaveDate, setleaveDate] = useState('')
    const [leaveReason, setleaveReason] = useState('')
    const [leaveApprove, setleaveApprove] = useState('')
    const [userId, setuserId] = useState('')

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

    var data = {
        leaveDate: leaveDate,
        leaveReason: leaveReason,
        leaveApprove: leaveApprove,
        userId: userId
    }


    const addLeave = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:4000/leave`,data).then(res => {
            console.log(res.data)
        })
    }

    console.log("get Id in userDetail",localStorage.getItem('userId'));
    const userID = localStorage.getItem('userId');
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
                <h4 className="card-title">Add Leave</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={addLeave}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Leave Date</label>
                        <input type="date" className="form-control" placeholder="leaveDate" onChange={(e)=>{leaveDateHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Leave Reason</label>
                        <input type="text" className="form-control" placeholder="leaveReason" onChange={(e)=>{leaveReasonHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                      <label className="form-label">Is Active</label>
                      <select  className="select form-control wide"  onClick={(e)=>{leaveApproveHandler(e)}}>
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
                        <input type="text" className="form-control" placeholder="userId" value={userID} onClick={(e)=>{userIdHandler(e)}}/>
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
