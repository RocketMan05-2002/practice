import { useState } from "react"
import './random.css'

export default function RandomColor(){

    const[type,setType] = useState("hex");
    const[color,setColor] = useState("#000000");

    function randomNumberUtility(len){
        return Math.floor(Math.random()*len);
    }

    function handleHexColorGenerate(){
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

        let hexColor = "#";
        for(let i=0;i<6;i++){
            hexColor += hex[randomNumberUtility(hex.length)];
        }
        setColor(hexColor);
    }

    function handleRgbColorGenerate(){
        let r = randomNumberUtility(256);
        let g = randomNumberUtility(256);
        let b = randomNumberUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    return <div className="colorContainer" style={{ backgroundColor: color }}>
        <div className="colorContainer__btns">
            <button className="colorContainer__btns-btn" onClick={()=>setType("hex")}>{type==="hex"?"Hex Selected!":"Select Hex"}</button>
            <button className="colorContainer__btns-btn" onClick={()=>setType("rgb")}>{type==="rgb"?"Rgb Selected!":"Select Rgb"}</button>
            <button className="colorContainer__btns-btn" onClick={
                type==="hex"?handleHexColorGenerate:handleRgbColorGenerate
            }>Generate Color</button>
        </div>
        <h1>{color}</h1>
    </div>
}