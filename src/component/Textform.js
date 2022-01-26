import React, { useState } from "react";

export default function Textform(props) {
  const handleuperclick = () => {
    let newtxt = text.toUpperCase();
    settext(newtxt);
    props.showalert("CONVERT INTO UPPERCASE", "success");
  };
  const handlelowerclick = () => {
    let newtxt = text.toLowerCase();
    settext(newtxt);
    props.showalert("CONVERT INTO LowerCase", "success");
  };
  const handledcopy = () => {
    var text = document.getElementById("txtarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showalert("YOUR TEXT AREA TEXT COPY", "success");
  };
  const removeextraspace = () => {
    const newtxt=text.split(/[ ]+/);
    settext(newtxt.join(' '));
    props.showalert("REMOVE ALL EXTRA SPACE IN YOUR TEXT", "success");
  };
  const [text, settext] = useState("");
  //settext("karo man fave e karo");
  const handleonchange = (event) => {
    if (text.split(" ").length < 100) {
      settext(event.target.value);
    } else {
      props.showalert("now no more enter", "warning");
    }
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>
            {props.heading}
          </h1>
          <label htmlFor="txttextarea" className="form-label">
            {" "}
          </label>
          <hr />
          <textarea
            className="form-control"
            id="txtarea"
            rows="8"
            value={text}
            onChange={handleonchange}
          ></textarea>
          <br />
          <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleuperclick}>
            CONVERT INTO UPPERCASE
          </button>
          <button className="btn btn-primary mx-2 my-2"  disabled={text.length===0} onClick={handlelowerclick}>
            CONVERT INTO LOWERCASE
          </button>
          <button className="btn btn-primary mx-2 my-2" disabled={text.length===0}  onClick={handledcopy}>
            COPY TEXT
          </button>
          <button className="btn btn-primary mx-2 my-2"  disabled={text.length===0} onClick={removeextraspace}>
            REMOVE EXTRA SPACE 
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>YOUE TEXT SUMMARY</h1>
        <hr />
        <p>
          {" "}
          <b>{text.split(/[ ]+/).filter((element)=>{return element.length!==0}).length}</b> --NO OF WORD IN YOUR TEXT{" "}
          <b>{text.length}</b> --NO OF CARACTER IN YOUR FEEDBACK
        </p>
        <p>
          <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> minute approximately time
          reading text..
        </p>
        <h3>PREVIEW</h3>
        <hr />
        {text==="" ? <p><b>PLEASE ENTER SOME TEXT INTO TEXT AREA</b></p>:<p>{text}</p>}
      </div>
    </>
  );
}
