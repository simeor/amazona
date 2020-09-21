import React from 'react';
import data from '../data';
import Tshirt from '../components/Tshirt';

const HomeScreen=(props)=>{
  return(
    <div>
      <ul className="products">
          {
          data.products.map(product =>
            <li>
              <Tshirt product={product}/>
            </li>)
          }
        </ul>
    </div>
  )
}

export default HomeScreen;
