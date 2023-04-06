import React, {useState,useEffect}from 'react';

import { getProducts } from './helper.js/coreapicalls';
import Base from "./Base"


export default function Home(){

    const [products, setProducts] = useState([]);
    const [error, setEror] = useState(false);

    const loadAllProducts = () => {
        getProducts()
          .then(data => {
            if (data.error){
              setEror(data.error);
              console.log(error);
            } else{
                setProducts(data);
            }
        }) ;
        
    };

    useEffect( () => {
        loadAllProducts();
    }, []);

    return (
        <Base title ="Home Page" description ="welcome to ecomerece website">
            <h1> Home Component</h1>
            
            
            <div className = "row">
                {products.map((product,index) => {
                    return (
                        <div key = {index}>
                            <h1>{product.name}</h1>
                        </div>

                );

            })}
            </div>
        </Base>

    )
}