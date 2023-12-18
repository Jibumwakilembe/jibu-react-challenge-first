import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SubHeader from './SubHeader'

function Header() {
  return (
    <>
    <header>
        <div className="header-container">
                <div className="header-title-container">
                  <Link to='/' className="header-title">
                    DEMO Streaming
                  </Link>
                </div>
                
                <div className="header-login-container">
                    <Link to='/login' className="header-login">
                        Log in
                    </Link>
                </div>

                <div className="header-button-container">
                   <button className="header-button">
                       start your free trial
                   </button>
                </div>
        </div>
    </header>
    <SubHeader />
    
      
    </>
  )
}

export default Header
