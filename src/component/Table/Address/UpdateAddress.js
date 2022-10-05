import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export const UpdateAddress = () => {

    const [data, setdata] = useState('')
    var id = useParams().id

    var navigate = useNavigate()

    const getUserAddressById = (e) =>{
        axios.get(`http://localhost:4000/userAddress/${id}`).then(res=>{
            console.log(res.data.data);
            setdata(res.data.data)
        })
    }

    useEffect(() => {
      getUserAddressById()
    
    }, [])
    
    const [userAddress, setuserAddress] = useState(data.userAddress)
    const [city, setcity] = useState(data.city)
    const [state, setstate] = useState(data.state)
    const [pincode, setpincode] = useState(data.pincode)
    const [userId, setuserId] = useState(data.userId)

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
    var data1 ={
        userAddressId:id,
        userAddress:userAddress,
        city:city,
        state:state,
        pincode:pincode,
        userId:userId
    }

    const updateUserAddress = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:4000/userAddress`,data1).then(res=>{
            console.log("Data is Updated",data1);
            alert("data Updated")
        })
        navigate('/listUserAddress')
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
                  <form onSubmit={updateUserAddress}>
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" placeholder="Address" defaultValue={data.userAddress} onChange={(e)=>{userAddressHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">City</label>
                        <input type="text" className="form-control" placeholder="city" defaultValue={data.city} onChange={(e)=>{cityHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">State</label>
                        <input type="text" className="form-control" placeholder="State" defaultValue={data.state} onChange={(e)=>{stateHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Pincode</label>
                        <input type="text" className="form-control" placeholder="Pincode" defaultValue={data.pincode} onChange={(e)=>{pincodeHandler(e)}}/>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">User</label>
                        <input type="text" className="form-control" placeholder="User" value={localStorage.getItem('userId')} onChange={(e)=>{UserIdHandler(e)}}/>
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
