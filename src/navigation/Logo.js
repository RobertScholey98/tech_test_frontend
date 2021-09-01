import React, { useState, useEffect } from 'react';
import './NavbarTop.css';
function Logo() {
  const [logoUrl, setLogoUrl] = useState('https://betway.com/doc-centre/assets/betway-logo-white-sml.png')

  useEffect(() => {
    //Check if the server is sending a seasonal logo
    async function seasonalLogo() {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/getSeasonalLogo`,
        {
          method: 'GET',
          headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
          }
        }
      )
      const res = await response.json()

      if(res.logoUrl !== logoUrl) {
        setLogoUrl(res.logoUrl);
      }else{
        console.log('No seasonal logo')
      }
    }

    seasonalLogo()
  },[])
  return(
    <img src={logoUrl} className='logo'/>
  )
}

export default Logo;
