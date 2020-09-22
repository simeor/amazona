import React from 'react';
import data from '../data';
import ProductsView from './ProductsView';

const ProductScreen=(props)=>{
  const product = data.products.find(x => x._id == props.match.params.id);
  console.log(props.match.params.id)
  return(
    <div>
      <ProductsView product={product}/>
    </div>
  )
}

export default ProductScreen;
