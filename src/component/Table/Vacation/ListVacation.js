import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export const ListVacation = () => {


    const [listVacation, setlistVacation] = useState([])

    const getVacation = () => {
        axios.get(`http://localhost:4000/vacation`).then(res => {
            setlistVacation(res.data.data)
            console.log(res.data.data);
        })
    }
    useEffect(() => {
        getVacation()
    }, [])

    const deleteVacation = (id) => {
        axios.delete(`http://localhost:4000/vacation/${id}`).then(res => {
            getVacation()
            console.log(res.status);
        })
    }

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
                                    <div id="example3_wrapper" className="dataTables_wrapper no-footer"><div className="dataTables_length" id="example3_length"><label>Show <select name="example3_length" aria-controls="example3" className><option value={10}>10</option><option value={25}>25</option><option value={50}>50</option><option value={100}>100</option></select> entries</label></div><div id="example3_filter" className="dataTables_filter"><label>Search:<input type="search" className placeholder aria-controls="example3" /></label></div><table id="example3" className="display dataTable no-footer" style={{ minWidth: 845 }} role="grid" aria-describedby="example3_info">
                                        <thead>
                                            <tr role="row">
                                                <th className="sorting_asc" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} aria-label="Name: activate to sort column ascending" style={{ width: '151.336px' }}>#</th>
                                                {/* <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '235.82px' }}>User Name</th> */}
                                                <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '235.82px' }}>Start Date</th>
                                                <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '235.82px' }}>End Date</th>
                                                <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} aria-label="Position: activate to sort column ascending" style={{ width: '235.82px' }}>Vacation Discreption</th>
                                                <th  tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} aria-label="Name: activate to sort column ascending" style={{ width: '151.336px' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                             {

                                            listVacation.map((vacation) => {
                                                return (<tr role="row" className="odd">
                                                        <td>{vacation._id}</td>
                                                        {/* <td>{vacation.userId.firstName}</td> */}
                                                        <td>{vacation.startDate}</td>
                                                        <td>{vacation.endDate}</td>
                                                        <td>{vacation.vacationDiscreption}</td>

                                                        <td>
													<div class="d-flex">
														<Link to={`/${Deshbord}/listVacation/updateVacation/${vacation._id}`} class="btn btn-primary shadow btn-xs sharp me-1"><i class="fas fa-pencil-alt"></i></Link>
														<button onClick={()=>{deleteVacation(vacation._id)}}  class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash" ></i></button>
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
