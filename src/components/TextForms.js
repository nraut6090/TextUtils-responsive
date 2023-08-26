import React, { useState } from "react";
//This sugests that react by default export  something that we are importing in the react variable
//Other things are named exports from "react" that things should be imported with matching name only
export default function TexthtmlForms(props) {
  const [text, setText] = useState("Enter text");
  const [words, setWords] = useState("0");
  const uperHandler = () => {
    let uper = text.toUpperCase();
    setText(uper);
    props.showAlert("Converted to Uppercase", "success");
  };
  const lowerHandler = () => {
    let lower = text.toLowerCase();
    setText(lower);
    props.showAlert("Converted to Lowercase", "success");
  };
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  const clickHandler = (event) => {
    if (event.target.value === "Enter text") {
      setText("");
    } else {
      setText(event.target.value);
    }
  };


  let count =0;
  const check1 = () => {
    let array=text.split(" ")
    console.log(array)
    if (text === "Enter text" || text === "") {
      setWords("0");
    }
    else {
      
      for(var i=0;i<array.length;i++){
        if(array[i]!==''){
          count++;
          setWords(count);
        }
      }
    }

  };
  const clearHandler=()=>{
    setText(" ");
    setWords("0");
  }
  
  
  return (
    <>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onKeyUp={check1}        //Logic for counting of words ...
            onChange={changeHandler}
            onClick={clickHandler}
            value={text}
            rows="9"
          ></textarea>
        </div>

        {/* Buttons to perforn operations */}
        <div className="btn-responsive" >

        <button
          type="button"
          className="btn btn-primary mx-2 addition"
          onClick={uperHandler}
          >
          Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 addition"
          onClick={lowerHandler}
          >
          Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 addition"
          onClick={clearHandler}
          >
          Clear Text
        </button>
          </div>
      </div>
      <div
      
        className={`container my-6 text-${
          props.tcolor
         
        }`}
      >
        <h2>Your text features</h2>
        <p>
          {words} words and {text.length} letters
        </p>
       
      </div>
    </>
  );
}
