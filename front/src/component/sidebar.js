
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {FaTh,FaBars, FaCar, FaFile, FaBuilding, FaMoneyBillAlt, FaList } from 'react-icons/fa';


 export function SideBarComponent({ children }) {

  const[isOpen,setIsOpen] = useState(false);  
  const toggle =() => setIsOpen(!isOpen)

  const menuItem =[
    {
      path:'/',
      name:'Parametre',
      icon:<FaTh/>
    },
    {
      path:'/societe',
      name:'Societe',
      icon:<FaBuilding/>
    },
    {
      path:'/voiture',
      name:'Voiture',
      icon:<FaCar/>
    },
    {
      path:'/contrat',
      name:'Contrat',
      icon:<FaFile/>
    },
    {
      path:'/facture',
      name:'Facture',
      icon:<FaMoneyBillAlt/>
    },
    {
      path:'/list',
      name:'List',
      icon:<FaList/>
    },
  ]

  return (
    <div className='containr'>
      <div  style={{width: isOpen ? "210px" :"50px"}}className='sidebar'>
        <div className='top-section'>
          <h1 style={{display: isOpen ? "block" :"none"}}className='logo'>Bus Software</h1>
          <div style={{marginLeft: isOpen ? "50px" :"0px"}}className='bars'>
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className='link' activeClassName='active'>
            <div className='icon'>{item.icon}</div>
            <div style={{display: isOpen ? "block" :"none"}}className='link_text'>{item.name}</div>
          </NavLink>
        ))}

      </div>
      <main>{children}</main>

    </div>
  );
}

export default SideBarComponent;
