import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from 'react-icons/bs'
import './slider.css'

export default function ImageSlider({ url,limit,page }){

    const[images,setImages] = useState([]);
    const[current,setCurrent] = useState(0);
    const[loading,setLoading] = useState(false);
    const[errorMsg,setErrorMsg] = useState(null);

    async function fetchImages(){
        try{
            setLoading(true);
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if(data && data.length){
                setImages(data);
                setLoading(false);
            }
        }catch(e){
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    function handlePrevious(){
        setCurrent(current===0?images.length-1:current-1);
    }
    function handleNext(){
        setCurrent(current===images.length-1?0:current+1);
    }

    useEffect(() => {
        fetchImages();
    }, []);
    
    useEffect(() => {
        if (!images.length) return;
    
        const interval = setInterval(() => {
            setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
        }, 2000);
    
        return () => clearInterval(interval);
    }, [images]);

    if(loading) return <div>Loading...please wait</div>;
    if(errorMsg) return <div>Error occurred: {errorMsg}</div>

    return (
        <div className="slider__container">
            <BsArrowLeftCircleFill className="arrow arrow-left" 
            onClick={handlePrevious}
            />
            {
                images && images.length ? 
                images.map((item,ind)=>{
                    return <img 
                    key={item.id}
                    alt={item.download_url}
                    src={item.download_url}
                    className={current===ind?"current-image":"current-image hide-current-image"}
                    />
                })
                :null
            }
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext}/>
            <div className="circle-indicators">
                {
                    images && images.length ? 
                    images.map((_,ind)=><button
                    key={ind}
                    className={current===ind?"current-indicator":"current-indicator inactive-indicator"}
                    onClick={()=>setCurrent(ind)}
                    >
                    </button>)
                    :null
                }
            </div>
        </div>
    )
}