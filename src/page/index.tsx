import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Crew from '../component/crew';
import Destination from '../component/destination';
import Header from '../component/header/header';
import HomePage from '../component/home/home';
import Technology from '../component/technology';

function Home() {
  return (
    <>
        <Header />
        <Routes>
            <Route  path='/'  element={<HomePage />} />
            <Route  path='/destination/:id'  element={<Destination />} />
            <Route  path='/crew/:id'  element={<Crew />} />
            <Route  path='/technology/:id'  element={<Technology />} />
        </Routes>
    </>
  )
}

export default Home;