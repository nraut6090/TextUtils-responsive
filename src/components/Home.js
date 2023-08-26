import React, { useState } from "react";
import Alert from "./Alert";
import Navbar from "./Navbar";
import TextForms from "./TextForms";
function Home() {
  
  const [alert, setAlert] = useState(null);
  //For Alert component ....
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  //=====================================
  const [panel, setPanel] = useState("none");
  const [mode, setMode] = useState("light");

  const [tcolor, settcolor] = useState("dark");

  //===================================
  const panalize = () => {
    if (mode !== "dark") {
      setPanel("inline");
    } else {
      setPanel("none");
    }
  };
  //======================================
  const customize_1 = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "red";
      settcolor('light')
    } else {
      setPanel("none");
    }
  };
  const customize_2 = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "gray";
      settcolor('light')
    } else {
      setPanel("none");
    }
  };
  const customize_3 = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "blue";
      settcolor('light')
    } else {
      setPanel("none");
    }
  };
  const customize_4 = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "yellow";
    
      settcolor('dark')
    } else {
      setPanel("none");
    }
  };
  const customize_5 = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "green";
      settcolor('light')
    } else {
      setPanel("none");
    }
  };
  const customize_6 = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#ADD8E6";
      settcolor('light')
    } else {
      setPanel("none");
    }
  };
//==================================
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      settcolor("light")
      document.body.style.backgroundColor = "indigo";
      showAlert("Dark Mode is enabled", "success");
    } else {
      setMode("light");
      settcolor("dark")
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        panalize={panalize}
        panel={panel}
        customize_1={customize_1}
        customize_2={customize_2}
        customize_3={customize_3}
        customize_4={customize_4}
        customize_5={customize_5}
        customize_6={customize_6}
      ></Navbar>
      <Alert alert={alert}> </Alert>
      <TextForms
        heading="Enter the text to analyze now"
        mode={mode}
        showAlert={showAlert}
        tcolor={tcolor}
      ></TextForms>
    </>
  );
}

export default Home