import { useEffect, useState } from "react"
import "./scroll.css"
export default function Scroll(){

    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(false);
    const[errorMsg,setErrorMsg] = useState(null);

    const[scrollPercent, setScrollPercent] = useState(0);

    async function fetchData(){
        try{
            setLoading(true);
            const response = await fetch("https://dummyjson.com/products?limit=100");
            const data = await response.json();
            if(data && data.products && data.products.length){
                setData(data.products);
                setLoading(false);
            }
        }catch(err){
            setErrorMsg(err.message);
            setLoading(false);
        }
    }

    function handleScrollPercent(){
        // document.body.scrollTop
        // document.documentElement.scrollTop
        // document.documentElement.scrollHeight
        // document.documentElement.clientHeight

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercent((howMuchScrolled/height)*100);
    }

    console.log(scrollPercent);

    useEffect(()=>{
        fetchData();
    },[]);

    useEffect(()=>{
        window.addEventListener("scroll",handleScrollPercent);
        return ()=>{
            window.removeEventListener("scroll",handleScrollPercent);
        }
    },[]);

    if(loading) return <div>Loading..please wait</div>
    if(errorMsg) return <div>Error: {errorMsg}</div>

    return <div>
        <div className="top-container gradient-bg">
            <h1>Custom Scroll Indicator</h1>
            <div className="scroll-container">
                <div className="scroll-progress-bar" style={{ width: `${scrollPercent}%`}}></div>
            </div>
        </div>
        <div className="data-container">
            {
                data.map((item)=>(
                    <p>{item.title}</p>
                ))
            }
        </div>
    </div>
}