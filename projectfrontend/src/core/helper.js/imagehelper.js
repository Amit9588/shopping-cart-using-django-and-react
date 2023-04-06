import React from 'react'

export default function ImageHelper(){
    const imageurl = product ? product.image :
    `https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
    return (
        
        <div className='rounded border border-sucess p-2' >
            <img src={imageurl}
            styles = {{maxheight : "100%", maxwidth:"100%"}}
            className="mb-3 rounded"
            alt = ""
            />

        </div>
    )
}