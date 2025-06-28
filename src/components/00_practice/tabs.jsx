import { useState } from "react"


export default function Tabs({tabsContent, onChange}){

    const [ current,setCurrent] = useState(0);

    function handleOnClick(curr){
        setCurrent(curr);
        onChange(curr);
    }

    return <div className="wrapper">
        <div className="heading">
            {
                tabsContent.map((item,ind)=><div key={item.label} onClick={()=>handleOnClick(ind)} >
                    <span className="label">{item.label}</span>    
                </div>)
            }
        </div>
        <div className="content">
            {
                tabsContent[current] &&  tabsContent[current].content
            }
        </div>
    </div>
}