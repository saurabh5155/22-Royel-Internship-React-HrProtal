import axios from 'axios'
import React, { useState } from 'react'


export const AddVacation = () => {

    const [startDate, setstartDate] = useState('')
    const [endDate, setendDate] = useState('')
    const [vacationDiscreption, setvacationDiscreption] = useState('')
    const [userId, setuserId] = useState('')

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

    const AddVacation = (e) => {
        e.preventDefault()
        const data = {
            startDate: startDate,
            endDate: endDate,
            vacationDiscreption: vacationDiscreption,
            userId: userId
        }
        axios.post(`http://localhost:4000/vacation`, data).then(res=>{
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
                <h4 className="card-title">Add Vacation</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={AddVacation}>
                    <div className="row">
                      
                    <div className="mb-3 col-md-6">
                        <label className="form-label">Start Date</label>
                        <input type="date" className="form-control"  onChange={(e)=>{startDateHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">End Date</label>
                        <input type="date" className="form-control"  onChange={(e)=>{endDateHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Vacation Discreption</label>
                        <input type="text" className="form-control" placeholder='vacationDiscreption' onChange={(e)=>{vacationDiscreptionHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">User Id</label>
                        <input type="text" className="form-control" placeholder='userId' value={userID} onClick={(e)=>{userIdHandler(e)}}/>
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
