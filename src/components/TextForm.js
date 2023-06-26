import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");

    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");

    }

    const handleClrClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? '#fff' : '#343a40' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : '#fff', color: props.mode === 'dark' ? '#fff' : '#343a40' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleClrClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleCopyClick}>Copy Text</button>
            </div >
            <div className="container my-3" style={{ color: props.mode === 'dark' ? '#fff' : '#343a40' }}>
                <h2>Your Text Summary ↴</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>

        </>
    )
}
