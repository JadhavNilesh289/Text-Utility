import React, { useState } from "react";

export default function TextForm(props) {
  const [myStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setStyle({
        color: "#909FB4",
        backgroundColor: "#1E293B",
      });
      setBtnText("Enable Light Mode");
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  const [text, setText] = useState("Enter text here");

  const toUpperCase = () => {
    let upperCase = text.toUpperCase();
    setText(upperCase);
    props.showAlert("Converted to Upper Case");
  };

  const toLowerCase = () => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
    props.showAlert("Converted to Lower Case");
  };

  const handleCopy = () => {
    let copyText = document.getElementById("textAreaForm");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied!");
  };

  //use RegExp Object

  const removeExtraSpace = () => {
    let removeSpace = text.split(/[ ]+/);
    setText(removeSpace.join(" "));
    props.showAlert("Extra Space Removed");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={myStyle}>
      <div className="flex flex-col items-center mt-8">
        <h1 className="font-semibold text-xl mb-3">{props.headings}</h1>

        <textarea
          name="textForm"
          id="textAreaForm"
          value={text}
          showAlert={props.showAlert}
          onChange={handleOnChange}
          className="border border-blue-500 min-h-56 md:min-w-[800px]"
        ></textarea>

        <div className="flex gap-2 pt-2">
          <button
            className="border text-sm mt-2 border-black p-1"
            onClick={toUpperCase}
          >
            UPPER CASE
          </button>

          <button
            className="border text-sm mt-2 border-black p-1"
            onClick={toLowerCase}
          >
            lower case
          </button>

          <button
            className="border text-sm mt-2 border-black p-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>

          <button
            className="border text-sm mt-2 border-black p-1"
            onClick={removeExtraSpace}
          >
            Remove Space
          </button>
        </div>
      </div>

      <div className="mt-10 md:ml-96">
        <h2 className="font-semibold text-xl my-2">Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
      </div>

      <div>
        <button className="border m-2" onClick={toggleStyle} type="button">
          {btntext}
        </button>
      </div>
    </div>
  );
}
