import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const AdminHeader = () => {
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

    const navigate = useNavigate();
    
      const logout = () => {
          localStorage.removeItem('email');
          localStorage.removeItem('user_auth');
          localStorage.removeItem('userId');
          localStorage.removeItem('roleId');
          localStorage.removeItem('role');
          console.log("LOGOUT Calll");
          navigate(`/`);
        };

  return (
    <div>
      <div class="nav-header">
            <div  class="brand-logo" style={{backgroundColor:'#DCD0FF'}}>
            <img  width="150" height="55" src="/images/unnati-Informatics-logo.png" alt="" >
				</img>

            </div>
            <div class="nav-control">
                <div class="hamburger">
                    <span class="line"></span><span class="line"></span><span class="line"></span>
                </div>
            </div>
        </div>
      <div className="header border-bottom" style={{backgroundColor:'#DCD0FF'}}>
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar">
                  Dashboard
                </div>
              </div>
              <ul className="navbar-nav header-right">
                <li className="nav-item dropdown  header-profile">
                  <Link className="nav-link" to={"javascript:void(0);"} role="button" data-bs-toggle="dropdown">
                    <img src="images/user.jpg" width={56} alt />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link to={`/${Deshbord}/profile`} className="dropdown-item ai-icon">
                      <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                      <span className="ms-2">Profile </span>
                    </Link>
        
                    <button onClickCapture={logout}  className="dropdown-item ai-icon">
                      <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1={21} y1={12} x2={9} y2={12} /></svg>
                      <span className="ms-2">Logout </span>
                    </button>

                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
 
  )
}
