import "./practice.css"
import Tabs from "./tabs"

function RandomComponent(){
        return <h1>Some random content</h1>
}


export default function Practice(){

    const tabs = [
        {
            label: "tab 1",
            content: <div>This is content for tab 1</div>
        },
        {
            label: "tab 2",
            content: <div>This is content for tab 2</div>
        },
        {
            label: "tab 3",
            content: <RandomComponent />
        }
    ]

    function handleChange(current){
        console.log(current);
    }

    return <div>
        <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
}