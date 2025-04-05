import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from 'react-icons/bs'
import './slider.css'

export default function ImageSlider({url,limit,page}){

    const[images,setImages] = useState([]);
    const[currentSlide,setCurrentSlide] = useState(0);
    const[errorMsg,setErrorMsg] = useState("");
    const[loading,setLoading] = useState(false);

    async function fetchImages(url){
        try{
            setLoading(true);
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();
            console.log(data);
            if(data && data.length){
                setImages(data);
                setLoading(false);
            }
        }catch(e){
            setErrorMsg(e.message);
            setLoading(false);
        }
    };

    useEffect(()=>{
        if(url!=='') fetchImages(url);
    },[url]);

    if(loading) return <div>Loading please wait!</div>;
    if(errorMsg) return <div>Error Occurred: {errorMsg}</div>;

    return <div className="slider">
        <BsArrowLeftCircleFill className='arrow arrow-left' />
        {
            images && images.length ?
            images.map((item)=>
            <img
            key={item.id}
            alt={item.download_url}
            src={item.download_url}
            className={item.id === currentSlide ? "current-image": "current-image disable-image"}
            />
            )
            :null
        }
        <BsArrowRightCircleFill className='arrow arrow-right' />
        <span className='circle-indicators'>
            {
                images && images.length ?
                images.map((_,index)=><button
                key={index}
                className={index === currentSlide ? 'current-indicator': "current-indicator inactive"}
                onClick={()=>setCurrentSlide(index)}
                >
                </button>)
                :null
            }
        </span>
    </div>
}