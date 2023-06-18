import { useState } from "react";

const Card = ({id,name,image,info,price,removetour}) => {
    const [readmore,setreadmore]= useState(false);
    
   
    
    const ReadHandler= ()=>{
       setreadmore(!readmore);
    }
  
    const description = readmore? info :  `${info.substring(0,200)}...`;
    return ( <div className="card">
                <img src={image} className="image" alt="img"/>
                <div className="tour-details">
                    <h4>₹{price}</h4>
                    <h4>{name}</h4>

                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={ReadHandler}>{readmore?'Show less': 'Read more'}</span>
                </div>
                <button onClick={()=>removetour(id)} className="btn-red">Not interested</button>
            </div>
     );
}
 
export default Card;
