import React, { useState, useEffect } from 'react';
import './NavbarBottom.css';
import DynamicLink from './DynamicLink.js';
function NavbarBottom() {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    async function getLinks() {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/getNavLinks`,
        {
          method: 'GET',
          headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
          }
        }
      )
      const res = await response.json()
      if(res.links[0]){
        setLinks(res.links)
      }
    }
    getLinks()
  })

  return(
    <>
    { links &&
      <div className='containerBottom'>
        {links.map((linkObj, index) => {
          return(<DynamicLink linkObj={linkObj} key={index} />)
        })}
      </div>
    }
    </>
  )
}

export default NavbarBottom;
