import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import {TourismStoreThree} from '../../store';
import './style.css';

function Technology() {
  const {id} = useParams<string>();
  const {sandParamsHandle, datas, filterHandle}:any = TourismStoreThree();  

  useEffect(() => {
    sandParamsHandle(id);
    filterHandle(id);
  }, [id, sandParamsHandle, filterHandle]);

  return (
    <div className='technology'>
        <h2> <span>02</span> SPACE LAUNCH 101 </h2>
        {
            datas.map((item: any, i: number):any => (
                <div className='technology-info' key={i} >
                    <div className='technology-title'>
                        <nav className='nav-link'>
                            <NavLink to='/technology/1'>1</NavLink>
                            <NavLink to='/technology/2'>2</NavLink>
                            <NavLink to='/technology/3'>3</NavLink>
                        </nav>
                        <div className='technology-information'>
                            <span>THE TERMINOLOGY...</span>
                            <h1>{item?.name}</h1>
                            <p>{item?.description}</p>
                        </div>
                    </div>
                    <div className='technology-logo'>
                        <img src={item?.images.portrait}  alt={item?.name} />
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Technology;