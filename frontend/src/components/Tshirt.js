import React from 'react';

 const Tshirt =(props)=>{
  return(
    <div className="product">
        <img src={props.product.image} alt="product"/>
        <div className="product-name"><a href="">{props.product.name}</a></div>
        <div className="product-brand">{props.product.brand}</div>
        <div className="product-price">£{props.product.price}</div>
        <div className="product-rating">{props.product.rating} Stars ({props.product.numReviews})</div>
    </div>
   )
 }

 export default Tshirt;
