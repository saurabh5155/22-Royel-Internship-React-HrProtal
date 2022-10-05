import axios from 'axios'
import React, { useState } from 'react'

export const AddFamilyRelation = () => {

    const [relationName, setrelationName] = useState('')

    const relationNameHandler = (e) =>{
      setrelationName(e.target.value)
      console.log(e.target.value);
    }

    const data = {
      relationName:relationName
    }

    const addFamilyRelation =(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:4000/familyRelation`,data).then(res=>{
          console.log(res.data);
        })
    }

  return (
    <div>
         <div className="content-body" style={{ minHeight: 812 }}>
        <div className="container-fluid">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Add Family Relation Name</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={addFamilyRelation}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label"> Family Relation Name</label>
                        <input type="text" className="form-control" placeholder="relation name" onChange={(e)=>{relationNameHandler(e)}}/>
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
