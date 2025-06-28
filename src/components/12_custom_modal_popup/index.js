import { useState } from "react";
import Modal from "./Modal"
import "./modal.css"

export default function Modaltest(){
    const[showModal,setShowModal] = useState(false);
    return <div className="container">
        <button  onClick={()=>setShowModal(!showModal)} >Open modal popup</button>
        {
            showModal && (
                <Modal 
                id={"custom-id"}
                header={<h1>Custom header</h1>}
                body={<h1>Custom body</h1>}
                footer={<h1>Custom footer</h1>}
                setShowModal={setShowModal}
                />
            )
        }
    </div>
}