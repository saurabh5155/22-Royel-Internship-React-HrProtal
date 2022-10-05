import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const UpdateSalary = () => {
     
    const [data, setdata] = useState('')
    const id=useParams().id

    var navigate = useNavigate();

    const getSalaryById = () => {
        axios.get(`http://localhost:4000/salary/${id}`).then(res => {
            setdata(res.data.data)
            console.log(res.data.data);
        })
    }

    useEffect(() => {
        getSalaryById()
    }, [])

    const [salaryValue, setsalaryValue] = useState(data.salaryValue)	
    const [bonus, setbonus] = useState(data.bonus)
    const [salaryDate, setsalaryDate] = useState(data.salaryDate)
    const [userId, setuserId] = useState(data.userId)

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

    const data1 = {
        salaryId:id,
        salaryValue:salaryValue,
        bonus:bonus,
        salaryDate:salaryDate,
        userId:userId
    }

    const updateSalary = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:4000/salary`, data1).then(res => {
            console.log(res.data);
            navigate('/listSalary')
        })
    }



    return (
    <div>
        <div className="content-body" style={{ minHeight: 812 }}>
        <div className="container-fluid">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Update Salary</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={updateSalary}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Salary Value</label>
                        <input type="number" className="form-control" placeholder="salaryValue" defaultValue={data.salaryValue} onChange={(e)=>{salaryValueHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">bonus</label>
                        <input type="number" className="form-control" placeholder="bonus" defaultValue={data.bonus} onChange={(e)=>{bonusHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Salary Date</label>
                        <input type="date" className="form-control" placeholder="SalaryDate" defaultValue={data.salaryDate} onChange={(e)=>{salaryDateHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">User Id</label>
                        <input type="text" className="form-control" placeholder="userId" value={localStorage.getItem('userId')}onChange={(e)=>{userIdHandler(e)}}/>
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
