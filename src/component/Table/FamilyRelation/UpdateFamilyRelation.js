import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const UpdateFamilyRelation = () => {

    const [data, setdata] = useState('')
    var id = useParams().id

    var navigate = useNavigate();
    const getFamilyRelationById = ()=>{
        axios.get(`http://localhost:4000/familyRelation/${id}`).then(res=>{
            console.log(res.data.data);
            setdata(res.data.data)
        })
    }
    useEffect(() => {
        getFamilyRelationById()

    }, [])

    const [relationName, setrelationName] = useState(data.relationName)
    
    const familyRelationNameHandler = (e) =>{
        setrelationName(e.target.value)
        console.log(e.target.value)
        
    }
    const data1 = {
        familyRelationId:id,
        relationName:relationName
    }
    
    const updateFamilyRelation =  (e) => {
        e.preventDefault()
        axios.put(`http://localhost:4000/familyRelation`,data1).then(res=>{
            alert("Data is Updated")
            console.log(data1);
            navigate('/listFamilyRelation')
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
                  <form onSubmit={updateFamilyRelation}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Family Relation Name</label>
                        <input type="text" className="form-control" placeholder="Relation Name" defaultValue={data.relationName} onChange={(e)=>{familyRelationNameHandler(e)}}/>
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
