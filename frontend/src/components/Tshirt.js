import React from 'react';
import {Link} from 'react-router-dom';

 const Tshirt =(props)=>{
  return(
    <div className="product">
        <div className="product-name">
        <Link to={`/product/${props.product._id}`}>
          <img src={props.product.image} alt="product"/>
          {props.product.name}
        </Link></div>
        <div className="product-brand">{props.product.brand}</div>
        <div className="product-price">£{props.product.price}</div>
        <div className="product-rating">{props.product.rating} Stars ({props.product.numReviews})</div>
    </div>
   )
 }

 export default Tshirt;
