import { useState } from "react"


export default function Tabs({tabsContent}){

    const[currentTab, setCurrentTab] = useState(0);

    return <div>
        <div className="heading">
            {
                tabsContent.map((item,ind)=>(
                    <div key={ind} onClick={()=>setCurrentTab(ind)}  >{item.label}</div>
                ))
            }
        </div>
        <div className="content">
            {
                tabsContent[currentTab] && tabsContent[currentTab].content
            }
        </div>
    </div>
}