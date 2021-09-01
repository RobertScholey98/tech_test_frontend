import React, { useState } from 'react';
import './NavbarBottom.css';

function DynamicLink({linkObj}) {
  const [hovered, setHovered] = useState(false);

  const isHovered = () => {
    if(hovered){
      return `5px solid ${linkObj.color}`
    }else{
      return `5px solid black`
    }
  }

  return(
    <div
    className='dynamicLink'
    style={{borderBottom: isHovered(), transition: '.3s'}}
    onMouseOver={() => setHovered(true)}
    onMouseOut={() => setHovered(false)}
    >
      <p>{linkObj.name}</p>
    </div>
  )
}

export default DynamicLink;
