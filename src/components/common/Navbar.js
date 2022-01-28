import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../lib/auth.js'

function Navbar() {
  const isAuth = isAuthenticated()
  const navigate = useNavigate()


  const handleLogout = () => {
    console.log('Hi')
    removeToken()
    navigate('/login')
    
  }


  return (
    <nav className="navbar columns is-black" id="desktop-nav">     
      <div className="column is-three-quarters-desktop is-three-quarters-tablet" id="site-links">
        <div className="navbar-item">
          <Link to="/weapons">
            <h3>Classes</h3>
          </Link>
        </div>
        <div className="navbar-item">
          { isAuth && 
          <Link to="/userweapons">
            <h3>User Classes</h3>
          </Link>
          }
        </div>
        {
          !isAuth &&
            <div className="navbar-item" id="site-access">
              <Link to="/login">
                <h3>Login</h3>
              </Link>
            </div>
        }

        {
          !isAuth &&
            <div className="navbar-item" id="site-access">
              <Link to="/register" >
                <h3>Register</h3>
              </Link>
            </div>
        }
        {
          isAuth &&
            <div className="navbar-item" id="site-access">
              <Link to="/login" onClick={handleLogout}>
                <h3>Logout</h3>
              </Link>
            </div>
        }
      </div>
        
          

      <div className="column is-one-quarter-desktop is-one-quarter-tablet" id="access">
        <div className="navbar-item">
          {
            !isAuth &&
            <div className="navbar-item">
              <Link to="/login">
                <h3>Login</h3>
              </Link>
            </div>
          }

          {
            !isAuth &&
            <div className="navbar-item">
              <Link to="/register" >
                <h3>Register</h3>
              </Link>
            </div>
          }
          {
            isAuth &&
            <div className="navbar-item">
              <Link to="/login" onClick={handleLogout}>
                <h3>Logout</h3>
              </Link>
            </div>
          }
        </div>
      </div>
    </nav>
  )


}

export default Navbar