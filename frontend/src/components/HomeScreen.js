import React, {useState, useEffect} from 'react';
import data from '../data';
import Tshirt from '../components/Tshirt';
import axios from 'axios';

const HomeScreen=(props)=>{

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      const {data} = await axios.get("/api/products")
      setProducts(data)
    }
    return ()=>{
    };
  },[])

  return(
    <div>
      <ul className="products">
          {
          data.products.map(product =>
            <li key={product._id} >
              <Tshirt product={product}/>
            </li>)
          }
        </ul>
    </div>
  )
}

export default HomeScreen;
