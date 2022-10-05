import axios from 'axios'
import React, { useState } from 'react'


export const AddSalary = () => {
  
    const [salaryValue, setsalaryValue] = useState('')	
    const [bonus, setbonus] = useState('')
    const [salaryDate, setsalaryDate] = useState('')
    const [userId, setuserId] = useState('')

    const salaryValueHandler = (e) => {
        setsalaryValue(e.target.value)
        console.log(e.target.value);
    }

    const bonusHandler = (e) => {
        setbonus(e.target.value)
        console.log(e.target.value);
    }

    const salaryDateHandler = (e) => {
        setsalaryDate(e.target.value)
        console.log(e.target.value);
    }

    const userIdHandler = (e) => {
        setuserId(e.target.value)
        console.log(e.target.value);
    }

    const data = {
        salaryValue:salaryValue,
        bonus:bonus,
        salaryDate:salaryDate,
        userId:userId
    }

    const addSalary = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:4000/salary`, data).then(res => {
            console.log(res.data);
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
                <h4 className="card-title">Add Salary</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={addSalary}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Salary Value</label>
                        <input type="number" className="form-control" placeholder="salaryValue" onChange={(e)=>{salaryValueHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">bonus</label>
                        <input type="number" className="form-control" placeholder="bonus" onChange={(e)=>{bonusHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Salary Date</label>
                        <input type="Date" className="form-control" placeholder="SalaryDate" onChange={(e)=>{salaryDateHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">User Id</label>
                        <input type="text" className="form-control" placeholder="userId" value={userID}  onClick={(e)=>{userIdHandler(e)}}/>
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
