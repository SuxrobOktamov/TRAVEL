import React from 'react';
import './style.css';

function HomePage() {
  return (
    <div className='homePage'>
        <div className='travel-title'>
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <h1>SPACE</h1>
          <p>
            Let's face it: If you want to go to space, you might as well <br/>
            genuinely go to outer space and not-hover kind of on the <br/>
            edge of it. Well sit back, and relax because we'll give you <br/>
            a truly out of this world experience!
          </p>
        </div>
        <div className='explore'>EXPLORE</div>
    </div>
  )
}

export default HomePage;