import { useState } from "react"
import "./like.css"
import { BsHeartFill, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs"
import { FaThumbsUp  } from "react-icons/fa"

export default function Practice(){

    const [states,setStates] = useState({
        like: false,
        love: false,
        fb: false,
        lin:false,
        insta:false
    })

    return <div className="wrapper">
        <button
        onClick={()=>setStates({...states, like:true})}
        className={`btn ${states.like?"liked":""}`}
        >
            <FaThumbsUp size={25}/> <span> {states.like?"liked":"like"} </span> 
        </button>
        <button
        onClick={()=>setStates({...states, love:true})}
        className={`btn ${states.love?"loved":""}`}
        >
            <BsHeartFill size={25} /> <span>{states.love?"loved":"love"} </span> 
        </button>
        <button
        onClick={()=>setStates({...states, fb:true})}
        className={`btn ${states.fb?"fbed":""}`}
        >
            <BsLinkedin size={25} /> <span>{states.fb?"connected":"connect"}</span> 
        </button>
        <button
        onClick={()=>setStates({...states, lin:true})}
        className={`btn ${states.lin?"lined":""}`}
        >
            <BsFacebook size={25} /> <span>{states.lin?"connected":"connect"}</span> 
        </button>
        <button
        onClick={()=>setStates({...states, insta:true})}
        className={`btn ${states.insta?"instaed":""}`}
        >
            <BsInstagram size={25} /> <span>{states.insta?"connected":"connect"}</span> 
        </button>
    </div>
}