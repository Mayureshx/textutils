import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(""); //useState is hook, here we are setting value of text, and if want to update value of "text" will use "setText" func

  const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert("Converted to UpperCase","success")
  };

  const handleDownClick = () => {
    console.log("Down was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);

    props.showAlert("Converted to LowerCase","success")
  };

  const handleClearClick = () => {
    console.log("Clear was clicked" + text);
    let newText = "";
    setText(newText);

    props.showAlert("Text has been cleared","success")
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    // console.log("I am copy");
    // let text = document.getElementById("myBox");
    // text.select(); //selction of text
    // document.getSelection().removeAllRanges() //remove slected text after copy
    navigator.clipboard.writeText(text); //With navigator interface we copied the value

    props.showAlert("Text has been copied to clipboard ","success")
  };


  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

    props.showAlert("Extra spaces has been removed","success")
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}//1st "{" for javascript and 2nd "{" for obj
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-3" onClick={handleDownClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-2  my-3" onClick={handleClearClick}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-3 " onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2  my-3" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
    </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black"}}>
        <h2>Your text summary</h2>
        <p>
            {/* splits white sapces and new line */}
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Nothing to preview!"}</p>
      </div>
    </>
  );
}

//State: A state depicts the local information of a Component. For example: If we write something in our text box it will be the state of our object for that specific point in time. The state is the changeable variable of our app. Whenever the state object changes, the component re-renders itself.
//Hook in React:
//Hook allows you to use state and other react features with a function-based component,  that is without writing a class.

//useState: It is the type of hook in react which allows us to use state variables in the function-based components.
