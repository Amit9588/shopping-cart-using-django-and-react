import React from 'react'

const ImageHelper =({product}) =>{
    const imageurl = product ? product.image :
    `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
    return (
        
        <div className='rounded border border-sucess p-2 cart-image-container' >
            <img src={imageurl}
            // styles = {{width:"300px"}}
            className="mb-3 rounded cart-image"
            alt = ""
            />

        </div>
    )
}
export default ImageHelper;