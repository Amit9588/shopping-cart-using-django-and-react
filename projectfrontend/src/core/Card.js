import React from "react"
import ImageHelper from "./helper.js/imagehelper";
import { Navigate } from "react-router-dom";
import { addItemtoCart,removeItemfromCart } from "./helper.js/cartHelper";


// to deal with this later
const isAuthenticated = true;

const Card = ({
    product,
    addtocart= true,
    removefromCart = true

}) => {

  const cartTitle = product ? product.name :"A photo from pixel"
  const cartDescription = product ? product.description :"Default description"
  const cartPrice = product ? product.price :"Default"

  const addToCart=() => {
    if (isAuthenticated){
      addItemtoCart(product, ()=> {})
      console.log("Added to cart")
    }else {
      console.log ("Login Please")
      }
    };
  const getAredirect = Navigate => {
    if (Navigate) {
      return <Navigate to= "/cart" />
      }
    };
  const showAddToCart = addToCart =>{
    return(
      addtocart &&(
        <button
              onClick={() => {addToCart()}}
              className="btn btn-block btn-outline-success mt-2 mb-2"
              >
              Add to Cart
          </button>
        )
      )
    }

    const showRemovefromCart = removefromCart => {
      return(
        removefromCart && (
          <button
                onClick={() => {
                  removeItemfromCart(product._id);
                  console.log("Product Handle form Cart")
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
          </button>
        )
      )
    }
    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cartTitle}</div>

        <div className="card-body">
           < ImageHelper product={product}/>
          
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
              {showRemovefromCart(removefromCart)}
            </div>
          </div>
        </div>
    </div>
    );
  };

export default Card;