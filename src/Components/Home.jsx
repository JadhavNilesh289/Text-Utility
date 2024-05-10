import TextForm from "./TextForm";
import React, { useState } from "react";
import Alert from "./Alert";

export default function Home(props) {
  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert({
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div>
      {alert && <Alert alert={alert} />}
      <TextForm showAlert={showAlert} headings="Enter a Text to Analyze" />
    </div>
  );
}
