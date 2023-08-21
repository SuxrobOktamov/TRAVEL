import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './style.css';
import {TourismStoretwo} from '../../store';

function Crew() {
  const {id} = useParams<string>();
  const {sandParamsHandle, datas, filterHandle}:any = TourismStoretwo();  

  useEffect(() => {
    sandParamsHandle(id);
    filterHandle(id);
  }, [id, sandParamsHandle, filterHandle]);

  return (
    <div className='crew'>
        <h2> <span>02</span> MEET YOUR CREW </h2>
        {
            datas.map((item: any, i: number):any => (
                <div className='crew-info' key={i} >
                    <div className='crew-title'>
                    <span>{item?.role}</span>
                    <h2>{item?.name}</h2>
                    <p>{item?.bio}</p>
                    <nav className='navbars'>
                        <NavLink to='/crew/1'></NavLink>
                        <NavLink to='/crew/2'></NavLink>
                        <NavLink to='/crew/3'></NavLink>
                        <NavLink to='/crew/4'></NavLink>
                    </nav>
                    </div>
                    <div className='crew-logo'>
                    <img src={item?.images.png}  alt={item?.name} />
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Crew;