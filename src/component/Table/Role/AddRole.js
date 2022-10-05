import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export const AddRole = () => {

  const [roleName, setroleName] = useState('')

  var navigate = useNavigate()

  let roleNameHandler = (e) =>{
    setroleName(e.target.value)
    console.log(e.target.value)

  }

  const addRole = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:4000/roles',data).then(res=>{
      console.log(res.data);
    })
    navigate('/listRole')
  }

  var data={
    roleName:roleName
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
                  <form onSubmit={addRole}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Role Name</label>
                        <input type="text" className="form-control" placeholder="role name" onChange={(e)=>{roleNameHandler(e)}}/>
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
