import React from 'react'

function Mode() {
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
  return (
    k
  )
}

export default Mode

