import axios from 'axios'
import React, { useState } from 'react'


export const AddCelebration = () => {

    const [celebrationName, setcelebrationName,] = useState('')
    const [celebrationDate, setcelebrationDate] = useState('')
    const [celebrationTime, setcelebrationTime] = useState('')
    const [celebrationDiscreption, setcelebrationDiscreption] = useState('')
    const [addressId, setaddressId] = useState('')
    const [userId, setuserId] = useState('')
    
    const celebrationNameHandler = (e) => {
        setcelebrationName(e.target.value)
        console.log(e.target.value);
    }
    
    const celebrationDateHandler = (e) => {
        setcelebrationDate(e.target.value)
        console.log(e.target.value);
    }

    const celebrationTimeHandler = (e) => {
        setcelebrationTime(e.target.value)
        console.log(e.target.value);
    }

    const celebrationDiscreptionHandler = (e) => {
        setcelebrationDiscreption(e.target.value)
        console.log(e.target.value);
    }

    const addressIdHandler = (e) => {
        setaddressId(e.target.value)
        console.log(e.target.value);
    }

    const userIdHandler = (e) => {
        setuserId(e.target.value)
        console.log(e.target.value);
    }

    const addCelebration = (e) => {
        e.preventDefault()
        const data = {
            celebrationName: celebrationName,
            celebrationDate: celebrationDate,
            celebrationTime: celebrationTime,
            celebrationDiscreption: celebrationDiscreption,
            addressId: addressId,
            userId: userId
        }
        axios.post(`http://localhost:4000/celebration`, data).then(res=>{
            console.log(res.data)
        })  
    }

    console.log("get Id in userDetail",localStorage.getItem('userId'));
    const userID = localStorage.getItem('userId');

  return (
    <div>
        <div className="content-body" style={{ minHeight: 812 }}>
        <div className="container-fluid">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add Celebration</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={addCelebration}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Celebration Name</label>
                        <input type="text" className="form-control" placeholder="celebration name" onChange={(e)=>{celebrationNameHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Celebration Date</label>
                        <input type="date" className="form-control" onChange={(e)=>{celebrationDateHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Celebration Time</label>
                        <input type="time" className="form-control" onChange={(e)=>{celebrationTimeHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Celebration Discreption</label>
                        <input type="text" className="form-control" placeholder="celebration Discreption" onChange={(e)=>{celebrationDiscreptionHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Address Id</label>
                        <input type="text" className="form-control" placeholder="addressId" onChange={(e)=>{addressIdHandler(e)}}/>
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
