import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const UpdateCelebration = () => {

    const [data, setData] = useState('')
    const id=useParams().id

    var navigate = useNavigate();

    const getCelebrationById = () => {
        axios.get(`http://localhost:4000/celebration/${id}`).then(res => {
            setData(res.data.data)
            console.log(res.data.data);
        })
    }
    useEffect(() => {
      getCelebrationById()
    }, [])
    
    const [celebrationName, setcelebrationName,] = useState(data.celebrationName)
    const [celebrationDate, setcelebrationDate] = useState(data.celebrationDate)
    const [celebrationTime, setcelebrationTime] = useState(data.celebrationTime)
    const [celebrationDiscreption, setcelebrationDiscreption] = useState(data.celebrationDiscreption)
    const [addressId, setaddressId] = useState(data.addressId)
    const [userId, setuserId] = useState(data.userId)
    
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

    const data1 = {
        celebrationId:id,
        celebrationName: celebrationName,
        celebrationDate: celebrationDate,
        celebrationTime: celebrationTime,
        celebrationDiscreption: celebrationDiscreption,
        addressId: addressId,
        userId: userId
    }

    const updateCelebration = (e) => {
         e.preventDefault()
         axios.put(`http://localhost:4000/celebration`, data1).then(res => {
             console.log(res.data);
             alert('Celebration Updated Successfully')
                navigate('/listCelebration')

    })
}       

  return (
    <div>
        <div className="content-body" style={{ minHeight: 812 }}>
        <div className="container-fluid">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add Role</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={updateCelebration}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Celebration Name</label>
                        <input type="text" className="form-control" placeholder="celebration name" defaultValue={data.celebrationName} onChange={(e)=>{celebrationNameHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Celebration Date</label>
                        <input type="date" className="form-control" defaultValue={data.celebrationDate} onChange={(e)=>{celebrationDateHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Celebration Time</label>
                        <input type="time" className="form-control" defaultValue={data.celebrationTime} onChange={(e)=>{celebrationTimeHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Celebration Discreption</label>
                        <input type="text" className="form-control" placeholder="celebration Discreption" defaultValue={data.celebrationDiscreption} onChange={(e)=>{celebrationDiscreptionHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Address Id</label>
                        <input type="text" className="form-control" placeholder="addressId" defaultValue={data.addressId} onChange={(e)=>{addressIdHandler(e)}}/>
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
