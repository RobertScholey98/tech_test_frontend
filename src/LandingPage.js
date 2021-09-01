import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import Promotion from './Promotion.js';

function LandingPage() {
  const [backgroundUrl, setBackgroundUrl] = useState('');
  useEffect(() => {
    async function getBackgroundUrl() {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/getBackgroundUrl`,
        {
          method: 'GET',
          headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
          }
        }
      )
      const res = await response.json()
      setBackgroundUrl(res.imgUrl)
    }
    getBackgroundUrl()
  }, [])

  return(
    <section
    className='heroSection'
    style={{ backgroundImage: `url(${backgroundUrl})`}}
    >
    <Promotion />
    </section>
  )
}

export default LandingPage;
