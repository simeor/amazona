import React from 'react';
import { Link } from 'react-router-dom';

const ProductsView = (props) => {
  return(
       <div>
    <div className="back-to-result">
      <Link to="/">Back to result</Link>
    </div>

    <div className="details">
      <div className="details-image">
        <img src={props.product.image} alt="product" ></img>
      </div>
      <div className="details-info">
        <ul>
          <li>
            <h4>{props.product.name}</h4>
          </li>
          <li>
            {props.product.rating} Stars ({props.product.numReviews} Reviews)
          </li>
          <li>
            Price: <b>£{props.product.price}</b>
          </li>
          <li>
            Description:
            <div>
              {props.product.description}
            </div>
          </li>
        </ul>
      </div>

      <div className="details-action">
        <ul>
          <li>
            Price: {props.product.price}
          </li>
          <li>
            Status: {props.product.status}
          </li>
          <li>
            Qty: <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </li>
          <li>
            <button className=" add-button button primary" >Add to Cart</button>
          </li>
        </ul>
      </div>
    </div>

   </div>
  )
}


export default ProductsView;
