

export default function Modal({id,header,body,footer,setShowModal}){
    return <div id={id || "Modal"} className="modal">
            <div className="header">
                <span onClick={()=>setShowModal(false)} >&times;</span>
                <h2>{header ? header : "Header"}</h2>
            </div>
            <div className="body">
                { body? body : "Body" }
            </div>
            <div className="footer">
                <h2>{footer?footer:"Footer"}</h2>
            </div>
    </div>
}