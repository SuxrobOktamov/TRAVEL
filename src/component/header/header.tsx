import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {TourismStore, TourismStoretwo, TourismStoreThree} from '../../store';
import './style.css';

const logo  = require("../../assets/shared/logo.svg").default;
const menu = require("../../assets/shared/icon-hamburger.svg").default;
const close = require("../../assets/shared/icon-close.svg").default;

function Header() {
  const [isActive, setIsActive] = useState<boolean>(false); 
  function activeHandle() {
    setIsActive(!isActive);
  };
  let {paramsOne} = TourismStore();
  let {paramsTwo} = TourismStoretwo();
  let {paramsThree} = TourismStoreThree();

  if(paramsOne) {
  }else {
    paramsOne = 'Mars';
  };

  if(paramsTwo) {
  }else {
    paramsTwo = '4';
  };

  if(paramsThree) {
  }else {
   paramsThree = '1';
  };

  return (
    <div className={`header ${isActive? "_active": null } `}>
        <div className='header-logo'>
            <img src={logo} alt='logo' />
        </div>
        <div className='line'>
        </div>
        <ul className='list-item'>
            <div className='close' onClick={activeHandle}>
                <img src={close} alt='close' />
            </div>
            <li className='items'>
                <NavLink  to={'/'}>
                    <span>00</span>
                    <span>HOME</span>
                </NavLink>
            </li>
            <li className='items'>
                <NavLink  to={`/destination/${paramsOne}`} >
                    <span>01</span>
                    <span>DESTINATION</span>
                </NavLink>
            </li>
            <li className='items'>
                <NavLink  to={`/crew/${paramsTwo}`} >
                    <span>02</span>
                    <span>CREW</span>
                </NavLink>
            </li>
            <li className='items'>
                <NavLink  to={`/technology/${paramsThree}`} >
                    <span>03</span>
                    <span>TECHNOLOGY</span>
                </NavLink>
            </li>
        </ul>
        <div className='menu' onClick={activeHandle}>
            <img src={menu} alt='menu' />
        </div>
    </div>
  )
}

export default Header;