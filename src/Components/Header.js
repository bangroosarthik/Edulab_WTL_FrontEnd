import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <header className='mainHeader'>
            <div className='mainDiv'>
                <Link className='logo' to='/'>EDULAB</Link>
                <div className='navList'>
                    <nav className='navItems'>
                        <Link to={'/signup'}>Register</Link>
                        <Link style={{color:'orange',fontWeight:'700'}} to={'/login'}>Login</Link>
                    </nav>
                </div>
            </div>
    </header>
    
  )
}

export default Header;