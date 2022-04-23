import React from "react";
import ReactDOM from "react-dom";
import { Pannellum } from "pannellum-react"; 
import thumb from "./images/thumbnail.jpg"; 
 import './App.css'
function App() {
  return (
    <div className="App">
      <Pannellum
        width="100vw"
        height="100vh"
        haov={360}
        vaov={180}
        image={thumb}
        pitch={10}
        yaw={110} 
        vOffsect={10}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={3}
          yaw={50}
          xaw={60}
          handleClick={(evt, name) => alert("Đây là lối đi lên cầu thang!!!!!")}
          name="hs1"
        />
        <Pannellum.Hotspot
          type="custom"
          pitch={3}
          yaw={-70}
          xaw={40}
          handleClick={(evt, name) => console.log(name)}
          name="hs1"
        />
      </Pannellum>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
