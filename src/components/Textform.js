import React, { useState } from 'react'

export default function Textform(props) {
    const handleupclick = () => {
        // console.log("uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleloclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleclearclick =()=>{
        let newtext = "";
        setText(newtext)
    }
    const handleonchange = (event) => {
        // console.log("onchange");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <div>
            <div className="mb-3" style={{color: props.mode==='dark'?'white':'#242c8d'}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control my-3" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#242c8d'}} id="mybox" rows="5"></textarea>
                <button className="btn btn-primary mx-1" onClick={handleupclick}> Convert into UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleloclick}> Convert into UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleclearclick}> Clear</button>
            </div>
            <div className='container my-3' style={{color:props.mode==='dark'?'white':'#242c8d'}}>
                <h2>words counter</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h3>preview</h3>
                <p>{text}</p>
            </div>
        </div>
        
     )
}

