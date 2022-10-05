import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const User = () => {

    const [firstName, setfirstName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [roleId, setroleId] = useState('')

    var id = useParams().id;
    var navigate = useNavigate();
    

    const firstNameHandler = (e) => {
        setfirstName(e.target.value)
        console.log(e.target.value);
    }

    const emailHandler = (e) => {
        setemail(e.target.value)
        console.log(e.target.value);
    }

    const passwordHandler = (e) => {
        setpassword(e.target.value)
        console.log(e.target.value)
    }

    const roleIdHandler = (e) =>{
        setroleId(e.target.value)
        console.log("...........",e.target.value);
        
    }
    


    const [listRole, setlistRole] = useState([])

    function getListRole() {
        axios.get('http://localhost:4000/roles').then(res => {
            console.log(res.data.data)
            setlistRole(res.data.data)
        })
    }

    useEffect(() => {

    getListRole()
    }, [])
    
    const submitUser = (e) => {
        e.preventDefault()
        console.log("submit");
        var data = {
            firstName: firstName,
            email: email,
            password: password,
            roleId:roleId
         
        }
        axios.post(`http://localhost:4000/user`, data).then(res => {
            console.log("post api call",res.data.data);
            axios.get(`http://localhost:4000/user/${    id}`).then(res => {
                console.log("get     api call",res.data.data);
            })
        })
    }

    return (
        <div>
            <div className="authincation h-100">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-md-6">
                            <div className="authincation-content" style={{ marginTop: "75px",marginBottom:"75px" }}>
                                <div className="row no-gutters">
                                    <div className="col-xl-12" style={{backgroundColor:'#DCD0FF'}}>
                                        <div className="auth-form">
                                            <div className="text-center mb-3">
                                                <a href="index.html"><img src="images/unnati-Informatics-logo.png" alt /></a>
                                            </div>
                                            <h4 className="text-center mb-4">Sign up your account</h4>
                                            <form onSubmit={submitUser}>
                                                <div className="mb-3">
                                                    <label className="mb-1"><strong>Name</strong></label>
                                                    <input type="text" className="form-control" placeholder="Name" name='firstName' onChange={(e) => { firstNameHandler(e) }} />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="mb-1"><strong>Email</strong></label>
                                                    <input type="email" className="form-control" placeholder="hello@example.com" name='email' onChange={(e) => { emailHandler(e) }} />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="mb-1"><strong>Password</strong></label>
                                                    <input type="password" className="form-control" placeholder='password' name='password' onChange={(e) => { passwordHandler(e) }} />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="mb-1"><strong>Role</strong></label>
                                                    
                                                <select  className="select form-control wide" onClick={(e)=>{roleIdHandler(e)}} >
                                                     <option selected>Open this select menu</option>
                                                {
                                                    
                                                    listRole.map((role) => {
                                                        return (
                                                            
                                                            <option value={role._id} >{role.roleName}</option>
                                                            )
                                                        })
                                                }
                                                </select>
                                                    </div>

                                                
                                                <div className="text-center mt-4">
                                                  <button type="submit" className="btn btn-primary btn-block">Next</button>
                                                </div>
                                            </form>
                                            <div className="new-account mt-3">
                                                <p>Already have an account? <Link className="text-primary" to={"/login"}>Sign in</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
