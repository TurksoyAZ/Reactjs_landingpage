
import './Footer.scss'

import React, { useEffect, useState } from 'react'


export default function Footor() {

    const [menus, setMenus] = useState([])

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then(respons => respons.json())
            .then(responsive => setMenus(responsive.drinks))
    }, [])
    console.log(menus);

    return (
        <div className='main'>
            {menus.map((element, i) => {
                return <div key={i} className='divElements'>
                    <p> <img src={element.strDrinkThumb} alt={element.strDrink} /></p>
                    <h2>{element.strDrink}</h2>
                    <p>{element.strInstructions}</p>
                </div>
            })}
        </div >
    )
}
