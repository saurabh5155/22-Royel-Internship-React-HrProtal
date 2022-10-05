import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export const Login = ({authenticate}) => {

    const [email, setemail] = useState(null)
    const [password, setpassword] = useState('')
    const [role, setrole] = useState('')
    const [userId, setuserId] = useState('')
    const [roleId, setroleId] = useState('')

    const emailHandler = (e) =>{
        setemail(e.target.value)
        console.log(e.target.value);
    }

    const passwordHandler = (e) =>{
        setpassword(e.target.value)
        console.log(e.target.value);
    } 

    useEffect(() => {
      const email= localStorage.getItem('email')
      const role= localStorage.getItem('role')
      const roleId= localStorage.getItem('roleId')
      const userId= localStorage.getItem('userId')

      setuserId(userId)
      setrole(role)
      setroleId(roleId)
      setuserId(userId)

      if(roleId & email){
          setroleId(true)
      }else{
          setroleId(false)
      }

    }, [])

    useEffect(() => {
      localStorage.setItem('roleId',roleId)
    }, [roleId])
    
    

    var navigate = useNavigate();
    

    
    const loginSubmit = (e) =>{
        e.preventDefault()

        var data = {
            email:email,
            password:password
        }

        axios.post(`http://localhost:4000/login`,data).then(res=>{
            if(res.data.status == 200){
                console.log("login Successful",res.data.data);
                
                console.log("email:",res.data.data.email);
                console.log("password",res.data.data.password);
                console.log("roleId",res.data.data.roleId._id);

                localStorage.setItem('email',res.data.data.email)
                localStorage.setItem('role',res.data.data.roleId)

                localStorage.setItem('roleId',res.data.data.roleId._id)
                localStorage.setItem('userId',res.data.data._id)

                authenticate && authenticate(true,res.data.data.roleId._id,res.data.data._id)

                    if(res.data.data.roleId._id=='620c8b2e0a0f3656ccae7e69')
                    {
                            navigate(`/adminDeshbord`)
                    }

                    else if(res.data.data.roleId._id == '623abe0cc11a8250f78f906b'){
                            navigate("/hrDeshbord")
                    }

                    else if(res.data.data.roleId._id == '623abe13c11a8250f78f906d'){
                            navigate("/employeeDeshbord")
                    }

            }

            else{
                console.log("Invalid credentials",res.data.data)

                alert("Invalid Credentials") 
            }
        })
    }

   

    return (
        <div>
            <div className="authincation h-100">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-md-6">
                            <div className="authincation-content" style={{ marginTop: `${100}px` }} >
                                <div className="row no-gutters">
                                    <div className="col-xl-12" style={{backgroundColor:'#DCD0FF'}}>
                                        <div className="auth-form">
                                        <div class="text-center mb-3">
										<img src="/images/unnati-Informatics-logo.png" alt="" />
									    </div>
                                            <div className="text-center mb-3">
                                                <h4>Sign in your account</h4>
                                            </div>
                                            <form onSubmit={loginSubmit}>
                                                <div className="mb-3">
                                                    <label className="mb-1"><strong>Email</strong></label>
                                                    <input type="email" className="form-control" placeholder='email' onChange={(e)=>{emailHandler(e)}} />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="mb-1"><strong>Password</strong></label>
                                                    <input type="password" className="form-control" placeholder="Password" onChange={(e)=>{passwordHandler(e)}} />
                                                </div>
                                                <div className="row d-flex justify-content-between mt-4 mb-2">
                                                    
                                                    <div className="mb-3">
                                                        <Link to={"/"}>Forgot Password?</Link>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                   <button type="submit" className="btn btn-primary btn-block">Sign Me In</button>
                                                </div>
                                            </form>
                                            <div className="new-account mt-3">
                                                <p>Don't have an account? <Link className="text-primary" to={"/signUp"}>Sign up</Link></p>
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
