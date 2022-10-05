import axios from 'axios'
import React, { useState } from 'react'


export const AddAddress = () => {

    const [userAddress, setuserAddress] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [pincode, setpincode] = useState('')
    const [userId, setuserId] = useState('')

    const userAddressHandler = (e) =>{
        setuserAddress(e.target.value)
        console.log(e.target.value);
    }

    const cityHandler = (e) =>{
        setcity(e.target.value)
        console.log(e.target.value);
    }

    const stateHandler = (e) =>{
        setstate(e.target.value)
        console.log(e.target.value);
    }

    const pincodeHandler = (e) =>{
        setpincode(e.target.value)
        console.log(e.target.value);
    }

    const UserIdHandler = (e) =>{
        setuserId(e.target.value)
        console.log(e.target.value);
    } 
    var data ={
        userAddress:userAddress,
        city:city,
        state:state,
        pincode:pincode,
        userId:userId
    }

    const addAddress = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:4000/userAddress`,data).then(res=>{
            console.log(res.data);
            alert("Data Added")
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
                <h4 className="card-title">Add Address</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form onSubmit={addAddress}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="Address" onChange={(e)=>{userAddressHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" placeholder="city" onChange={(e)=>{cityHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">State</label>
                        <input type="text" className="form-control" placeholder="State" onChange={(e)=>{stateHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Pincode</label>
                        <input type="text" className="form-control" placeholder="Pincode" onChange={(e)=>{pincodeHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">User</label>
                        <input type="text" className="form-control" placeholder="User" value={userID} onClick={(e)=>{UserIdHandler(e)}}/>
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
