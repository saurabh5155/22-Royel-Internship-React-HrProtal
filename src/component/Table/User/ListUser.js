import axios from 'axios'

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const ListUser = () => {

    const [listUser, setlistUser] = useState([])

    const getUser =  () =>{
        axios.get(`http://localhost:4000/user`).then(res=>{
            console.log(".........................",res.data.data)
            setlistUser(res.data.data)
        })
    }

    const deleteUser = (id) =>{
        axios.delete(`http://localhost:4000/user/${id}`).then(res=>{
            console.log("User Deleted",res.status);
        })
        window.location.reload(false);
    }

    useEffect(() => {
      getUser()
    }, [])
    
    const roleID= localStorage.getItem('roleId');
    console.log("roleID in userDetail",roleID);

    if(roleID=='620c8b2e0a0f3656ccae7e69'){
        var Deshbord = 'adminDeshbord'
    }
    else if( roleID == '623abe0cc11a8250f78f906b'){
        var Deshbord = 'hrDeshbord'
    }
    else {
        var Deshbord = 'employeeDeshbord'
    }

  return (
    <div>
           
            <div className="content-body" style={{ minHeight: 812 }}>
                <div className="container-fluid">

                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Profile Datatable</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <div id="example3_wrapper" className="dataTables_wrapper no-footer"><div className="dataTables_length" id="example3_length"><label>Show <select name="example3_length" aria-controls="example3" className><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div><div id="example3_filter" className="dataTables_filter"><label>Search:<input type="search" className placeholder aria-controls="example3" /></label></div><table id="example" className="display dataTable no-footer" style={{ minWidth: 845 }} role="grid" aria-describedby="example3_info">
                                        <thead>
                                            <tr role="row">
                                                <th className="sorting_asc" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} aria-label="Name: activate to sort column ascending" style={{ width: '151.336px' }}>#</th>
                                                <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '235.82px' }}>User Name</th>
                                                <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '235.82px' }}>Email</th>
                                                <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '235.82px' }}>Password</th>
                                                <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '235.82px' }}>Role Name</th>


                                                <th  tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} aria-label="Name: activate to sort column ascending">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                             {
                                        
                                            listUser.map((user) => {
                                                return (<tr  className="odd">
                                                        <td>{user._id}</td>
                                                        <td>{user.firstName}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.password}</td>
                                                        <td>{user.roleId.roleName}</td>
                                                        <td>
                                                            <div class="d-flex">
                                                                <Link to={`/${Deshbord}/updateUser/${user._id}`} class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></Link>
                                                                <button onClick={()=>{deleteUser(user._id)}} class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></button>
                                                            </div>
                                                        </td>												
							
                                                    </tr>

                                                )
                                            })
                                            }

                                            </tbody>
                                    </table><div className="dataTables_info" id="example3_info" role="status" aria-live="polite">Showing 1 to 10 of 30 entries</div><div className="dataTables_paginate paging_simple_numbers" id="example3_paginate"><a className="paginate_button previous disabled" aria-controls="example3" data-dt-idx={0} tabIndex={0} id="example3_previous"><i className="fa fa-angle-double-left" aria-hidden="true" /></a><span><a className="paginate_button current" aria-controls="example3" data-dt-idx={1} tabIndex={0}>1</a><a className="paginate_button " aria-controls="example3" data-dt-idx={2} tabIndex={0}>2</a><a className="paginate_button " aria-controls="example3" data-dt-idx={3} tabIndex={0}>3</a></span><a className="paginate_button next" aria-controls="example3" data-dt-idx={4} tabIndex={0} id="example3_next"><i className="fa fa-angle-double-right" aria-hidden="true" /></a></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>


  )
}