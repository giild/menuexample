import './Navbar.css'
import React, { useState } from 'react'
import * as faic from "react-icons/fa"
import * as aic from "react-icons/ai"
import { Link } from 'react-router-dom'
import { NavbarData} from './NavbarData'
import { IconContext } from 'react-icons'

function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{className: 'react-icons'}}>
        <div className='navbar'>
            <Link to="#" className='menu-bars'>
                <faic.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars' >
                        <aic.AiOutlineClose onClick={showSidebar}/>
                    </Link>
                </li>
                {NavbarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path} className={item.cName}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar