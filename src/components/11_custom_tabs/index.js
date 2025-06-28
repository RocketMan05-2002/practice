import Tabs from "./components/Tabs"

export default function Tabstest(){

    const tabs =[
        {
            label: "Tab 1",
            content: <div>This is some content for tab 1</div>
        },
        {
            label: "Tab 2",
            content: <div>This is some content for tab 2</div>
        },
        {
            label: "Tab 3",
            content: <div>This is some content for tab 3</div>
        }
    ]

    return <div className="container">
        <Tabs tabsContent={tabs} />
    </div>
}