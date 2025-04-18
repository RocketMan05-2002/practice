import { useState } from 'react';
import { FaStar } from 'react-icons/fa'
import './star.css'

export default function StarRating({noOfStars = 5}){

    const[rating,setRating] = useState(0);
    const[hover,setHover] = useState(0);
    
    function handleClick(ind){
        setRating(ind);
    }

    function handleMouseEnter(ind){
        setHover(ind);
    }

    function handleMouseLeave(){
        setHover(rating);
    }

    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_,index)=>{

                index+=1;

                return <FaStar
                key={index}
                className={index<= (hover||rating)?"active":"inactive"}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                size={40}
                />
            })
        }
    </div>
}