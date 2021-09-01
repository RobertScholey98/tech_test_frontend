import React, { useState, useEffect } from 'react';
import './Promotion.css';

function Promotion() {
  const [promotion, setPromotion] = useState({name: false, description: false});

  useEffect(() => {
    async function getPromotion() {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/getPromotion`,
        {
          method: 'GET',
          headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
          }
        }
      )
      const res = await response.json()
      setPromotion(res.promo)
    }
    getPromotion()
  },[])
  return(
    <section className='promotionContainer'>
    {promotion.name &&
      <h4 className='promotionName'>{promotion.name}</h4>
    }
    {promotion.description &&
      <h2 className='promotionDesc'>{promotion.description}</h2>
    }
    <div className='joinNow'>
      <p>Join Now</p>
    </div>
    </section>

  )
}

export default Promotion;
