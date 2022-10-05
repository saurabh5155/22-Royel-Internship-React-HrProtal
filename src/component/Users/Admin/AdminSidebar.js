import React from 'react'
import {  Link } from 'react-router-dom'


export const AdminSidebar = () => {
  return (

    <div>
      <div className="dlabnav">
        <div className="dlabnav-scroll mm-active ps">
          <ul className="metismenu mm-show" id="menu">
            {/* <li><Link className="has-arrow " to="javascript:void()" aria-expanded="false">
              <i className="fas fa-home" />
              <span className="nav-text">Dashboard</span>
            </Link>
              <ul aria-expanded="false" className="mm-collapse left" style={{}}>
                <li><Link to="index.html">Dashboard Light</Link></li>
                <li><Link to="index-2.html">Dashboard Dark</Link></li>
                <li><Link to="project-page.html">Project</Link></li>
                <li><Link to="contacts.html">Contacts</Link></li>
                <li><Link to="kanban.html">Kanban</Link></li>
                <li><Link to="calendar-page.html">Calendar</Link></li>
                <li><Link to="message.html">Messages</Link></li>
              </ul>
            </li> */}

            <li className="mm-active"><Link className="has-arrow" to="javascript:void()" aria-expanded="true" >
              <i className="fas fa-info-circle"></i>
              <span className="nav-text">Add</span>
            </Link>
              <ul aria-expanded="true" className="left mm-collapse mm-show">
                <li><Link to="roles">Add Role</Link></li> 
                <li><Link to="addUserDetail">Add UserDetail</Link></li>
                <li><Link to="addAddress">Add Address</Link></li>
                <li><Link to="addFamilyRelation">Add Family Relation</Link></li>
                <li><Link to="addFamilyDetail">Add Family Detail</Link></li>
                <li><Link to="addCelebration">Add Celebration</Link></li>
                <li><Link to="addVacation">Add Vacation</Link></li>
                <li><Link to="addSalary">Add Salary</Link></li>
                <li><Link to="addLeave">Add Leave</Link></li>
              </ul>
            </li>

            <li className="mm-active"><Link className="has-arrow " to="javascript:void()" aria-expanded="true">
              <i className="fas fa-info-circle"></i>
              <span className="nav-text">List</span>
            </Link>
              <ul aria-expanded="true" className="left mm-collapse mm-show">
                <li><Link to="listRole">List Roles</Link></li>
                <li><Link to="listUser">List Users</Link></li>
                <li><Link to="listUserDetail">List Users Detail</Link></li>
                <li><Link to="listUserAddress">List Users Address</Link></li>
                <li><Link to="listFamilyRelation">List Family Relation</Link></li>
                <li><Link to="listFamilyDetail">List Family Detail</Link></li>
                <li><Link to="listCelebration">List Celebration</Link></li>
                <li><Link to="listVacation">List Vacation</Link></li>
                <li><Link to="listSalary">List Salary</Link></li>
                <li><Link to="listLeave">List Leave</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )

}
