import React, { useEffect } from 'react';
import './style.css';
import { NavLink , useParams} from 'react-router-dom';
import {TourismStore} from '../../store';

function Destination() {

  const {id} = useParams<string>();
  const {sandParamsHandle, datas, filterHandle}:any = TourismStore();
  
  useEffect(() => {
    sandParamsHandle(id);
    filterHandle(id);
  }, [id, sandParamsHandle, filterHandle]);
  

  return (
    <div className='destination'>
        <h2> <span>01</span> PICK YOUR DESTINATION </h2>
        {
          datas.map((item:any, i:number):any => (
            <div className='destination-info' key={i} >
              <div className='destination-logo'>
                <img src={item?.images.png}  alt={item?.name} />
              </div>
              <div className='destination-title'>
                <nav className='navbar'>
                  <NavLink to='/destination/Moon'>MOON</NavLink>
                  <NavLink to='/destination/Mars'>MARS</NavLink>
                  <NavLink to='/destination/Europa'>EUROPE</NavLink>
                  <NavLink to='/destination/Titan'>TITAN</NavLink>
                </nav>
                <h1>{item?.name}</h1>
                <p>
                  {item?.description}
                </p>
                <div className='travel'>
                  <div className='travel-distance'>
                    <small>AVG. DISTANCE</small>
                    <h3>{item?.distance}</h3>
                  </div>
                  <div className='travel-time'>
                    <small>EST. TRAVEL TIME</small>
                    <h3>{item?.travel}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Destination;