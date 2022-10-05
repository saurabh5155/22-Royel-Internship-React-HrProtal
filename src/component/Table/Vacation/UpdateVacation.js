import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const UpdateVacation = () => {

    const [data, setData] = useState('')
    const id=useParams().id

    var navigate = useNavigate();

    const getVacationById = () => {
        axios.get(`http://localhost:4000/vacation/${id}`).then(res => {
            setData(res.data.data)
            console.log(res.data.data);
        })
    }

    useEffect(() => {
        getVacationById()
    }, [])


    const [startDate, setstartDate] = useState(data.startDate)
    const [endDate, setendDate] = useState(data.endDate)
    const [vacationDiscreption, setvacationDiscreption] = useState(data.vacationDiscreption)
    const [userId, setuserId] = useState(data.userId)

    const startDateHandler = (e) => {
        setstartDate(e.target.value)
        console.log(e.target.value);
    }

    const endDateHandler = (e) => {
        setendDate(e.target.value)
        console.log(e.target.value);
    }


    const vacationDiscreptionHandler = (e) => {
        setvacationDiscreption(e.target.value)
        console.log(e.target.value);
    }

    const userIdHandler = (e) => {
        setuserId(e.target.value)
        console.log(e.target.value);
    }

    const data1 = {
        vacationId:id,
        startDate:startDate,
        endDate:endDate,
        vacationDiscreption:vacationDiscreption,
        userId:userId
    }

    const updateVacation = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:4000/vacation`, data1).then(res => {
            console.log(res.data);
            navigate('/listVacation')
            alert('Vacation Updated Successfully')
        })

    }



  return (
    <div>
        <div className="content-body" style={{ minHeight: 812 }}>
        <div className="container-fluid">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add Vacation</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={updateVacation}>
                    <div className="row">
                      
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Start Date</label>
                        <input type="date" className="form-control" defaultValue={data.startDate} onChange={(e)=>{startDateHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">End Date</label>
                        <input type="date" className="form-control" defaultValue={data.endDate} onChange={(e)=>{endDateHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Vacation Discreption</label>
                        <input type="text" className="form-control" placeholder='vacationDiscreption' defaultValue={data.vacationDiscreption} onChange={(e)=>{vacationDiscreptionHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">User Id</label>
                        <input type="text" className="form-control" placeholder='userId'value={localStorage.getItem('userId')} onChange={(e)=>{userIdHandler(e)}}/>
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
