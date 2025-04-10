import React, { useEffect, useState } from 'react'
import datas from './datas.json'
import './items.css'

export default function ItemsManager(){
    const[nData,setNData] = useState([]);
    const[adder,setAdder] = useState(false);
    const[addValue,setAddValue] = useState("");
    useEffect(()=>{
        setNData(datas);
    },[])

    function handleRemove(id){
        setNData(nData.filter(item=>item.id!==id))
    }

    function handleSingleEnter(e,value){
        if(e.keyCode===13){
            setNData([...nData,{id:new Date().getTime(), name:value}]);
            setAddValue("");
        }
        
    }
    return(
        <div className='wrapper'>
            <ul>
                {
                    nData.map(item=> <li key={item.id}>
                        {item.name}
                        <button onClick={()=>handleRemove(item.id)}>Remove</button>
                    </li>)
                }
            </ul>
            <div className='btns'>
            <button onClick={()=>setNData([])}>Clear</button>
            <button onClick={()=>setAdder(!adder)} >Add a HERO</button>
            </div>
            {
                adder ? <div className='addItem'>
                    <input
                    type='text'
                    value={addValue}
                    onChange={(e)=>setAddValue(e.target.value)}
                    placeholder='enter name of hero'
                    autoFocus
                    onKeyDown={(e)=>handleSingleEnter(e,addValue)}
                    />
                </div>: null
            }
        </div>
    )
}