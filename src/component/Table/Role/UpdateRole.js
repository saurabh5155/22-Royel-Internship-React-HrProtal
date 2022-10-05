import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'


export const UpdateRole = () => {

    var id = useParams().id
    const [data, setdata] = useState("")

    const getRoleById = async () =>{
      await axios.get(`http://localhost:4000/roles/${id}`).then(res=>{
            setdata(res.data.data)
            console.log(res.data.data)
        })
    }

    const [roleName, setroleName] = useState(data.roleName)
    
    const roleNameHandler = (e) =>{
        setroleName(e.target.value)
        console.log(e.target.value)
    }

    useEffect(() => {
        getRoleById()  
    }, [])
    
    const updateRole =  (e) => {
        e.preventDefault()
        
        var data1 = {
            roleId:id,
            roleName:roleName
        }
         axios.put(`http://localhost:4000/roles/`,data1).then(res=>{
            alert("Data is Updated")
            console.log(data1);
        })
        
    }

  return (
    <div>
      
        
        <div className="content-body" style={{ minHeight: 812 }}>
        <div className="container-fluid">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Update Role</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                    {
                  <form onSubmit={updateRole}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Role Name</label>
                        <input type="text" className="form-control" placeholder="role name" defaultValue={data.roleName} onChange={(e)=>{roleNameHandler(e)}}/>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                  </form>
                    }
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
