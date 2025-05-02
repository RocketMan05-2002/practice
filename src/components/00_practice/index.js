import { useState } from "react";
import QRCode from "react-qr-code";

export default function Practice(){
    const[input,setInput] = useState('');
    const[qrCode,setQrCode] = useState('');

    function handleGenerateQR(){
        setQrCode(input);
        setInput('');
    }

    return <div className="wrapper">
        <div>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button disabled={input && input.trim ==="" ? true: false}
            onClick={handleGenerateQR}
            >Generate</button>
        </div>
        <div className="qr-div">
            <QRCode
            size={400}
            bgColor="#fff"
            id="qr-code-value"
            value={qrCode}
            />
        </div>
    </div>
}