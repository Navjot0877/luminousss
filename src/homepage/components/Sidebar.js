import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { SidebarData_loggedout } from './SidebarData_loggedout';
import Button from 'react-bootstrap/esm/Button';
import { Navigate } from 'react-router';
import {useNavigate} from 'react-router-dom';

const Sidebar = () =>{

  const [check, setCheck] = useState(false);

  const navigate = useNavigate();
  
  
  useEffect(()=> {
    let data = sessionStorage.getItem('myUser')
    data = JSON.parse(data)
    if(data!=null){
    setCheck(true);
   
    }
    else{
      setCheck(false);
    }
  
    
  
  })

  function logout(){
    sessionStorage.removeItem('myUser');
    navigate("/login");
    
  }

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <div className='sidebar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        {check?(
        <nav className={sidebar ? 'nav-men active' : 'nav-men'}>
          
          <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
 

const bool = item.bool;

              if(bool){
                  return <li key={index} className={item.cName}>      
                  <input type="button" className='logBut' onClick={logout} value={item.title}></input>
                </li>
                  }
                  else{
                    return <li key={index} className={item.cName}>      
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
            }})}
                
              
              
           
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars-closing'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
          </ul>
        </nav>
        ):(
          <nav className={sidebar ? 'nav-men active' : 'nav-men'}>
          
          <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData_loggedout.map((item, index) => {
              return(
                <li key={index} className={item.cName}>
                  
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars-closing'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
          </ul>
        </nav>
        )
          }
        </>
    )
}
export default Sidebar;