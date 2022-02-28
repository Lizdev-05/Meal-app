import React, {useEffect, useState} from 'react'
import axios from 'axios';
// import "./Cocktail.css"

function Cocktail() {
      
   const [drink, setDrink] = useState([])

    useEffect(() =>{

        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(res=>{
         console.log(res.data);

       setDrink(res.data.drink)

        }).catch(err=>{

      console.log(err);

        })
    }, []
        
    )

  const drinkList = drink.map((obj) =>{
      return <div className='col-md-3 col-sm-6'>
     <p>{obj.strDrink}</p>
     <img src={obj.strDrinkThumb} className="img-fluid" />
     <p>{obj.idDrink}</p>
    
      </div>
  })
  return (
    <div className='row container-fluid'>
          { drinkList}
        
    </div>
  )
}

export default Cocktail