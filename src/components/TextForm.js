import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log('Uppercase clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLowerClick = () =>{
        console.log('Uppercase clicked');
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")

    }
    const handleClearText = () =>{
        console.log('Uppercase clicked');
        // let newText = text.toLocaleLowerCase();
        setText("");
        props.showAlert("Text has been cleared", "success")

    }
    const handleCopy = () => {
        let text = document.getElementById('exampleFormControlTextarea1')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text has been copied to clipboard", "success")

    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Extra space removed", "success")

    }


    const handleOnChange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
  return (
      <>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#04273'}}>
            <h1 className='py-3' style={{color: props.mode==='dark'?'white' : 'black'}}>{props.heading}</h1>
            <div className="mb-3">            
                <textarea className="form-control shadow-none" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'? 'white' : 'black'}}id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-success mx-1 shadow-none' onClick={handleUpClick}>Convert to uppercase</button>
            <button className='btn btn-primary mx-1 shadow-none' onClick={handleLowerClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 shadow-none' onClick={handleClearText}>Clear text</button>
            <button className='btn btn-primary mx-1 shadow-none' onClick={handleCopy}>Copy text</button>
            <button className='btn btn-primary mx-1 shadow-none' onClick={handleExtraSpace}>Remove Extra space</button>
            
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#04273'}}>
            <h1>Your text summary here</h1>
            {/* <p>Your number of word is {text.split(" ").filter((Element)=>{return Element.length!==0}).length} and Character is {text.length}</p> */}
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes to read.</p>

            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter something to preview"}</p>
            
        </div>
    </>
  )
}


TextForm.propTypes = {
    
    heading : PropTypes.string.isRequired
}