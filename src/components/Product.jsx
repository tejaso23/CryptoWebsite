import React from "react";


const Coin = ({name,symbol,imgSrc,price}) => {
    return(


        <div className = "coin">
<img src = {imgSrc} alt={name}></img>
<h1>{symbol}</h1>
<p>{name}</p>
<p4>₹{price}</p4>


        </div>
    )
}

export default Coin;