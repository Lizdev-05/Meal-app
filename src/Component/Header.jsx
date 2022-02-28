import React from 'react'
import "./Header.css"


function Header() {
  return (
    <div className='Container-fluid mt-2 header'>
        <div><h4>Lizdev Meal</h4></div>
       <div className='right-nav'> 
        <a href="#">Home</a>
        <a href="Cocktail">Cocktail</a>
        <a href="#">Contact-Us</a>
        </div>
    </div>
  )
}

export default Header