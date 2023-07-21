import { useState } from "react";
import "./index.css";

function App() {
  const [picked, setPicked] = useState("white");
  const [increase, setIncrease] = useState(100);
  let inputStyles = {
    color: picked,
    fontSize: increase,
  };

  return (
    <div className="App">
      <div className="colors" onClick={(e) => console.log(e.target.style)}>
        <div className="color">
          <div
            className="circle one"
            onClick={() => setPicked("rgb(62, 62, 255)")}
          ></div>
          <div
            className="circle two"
            onClick={() => setPicked("rgb(251, 251, 63)")}
          ></div>
          <div
            className="circle three"
            onClick={() => setPicked("white")}
          ></div>
          <div
            className="circle four"
            onClick={() => setPicked("rgb(94, 255, 94)")}
          ></div>
          <div
            className="circle five"
            onClick={() => setPicked("rgb(255, 149, 55)")}
          ></div>
        </div>

        <div className="increase">
          <h3 onClick={() => setIncrease(increase - 20)}>-</h3>
          <h3 onClick={() => setIncrease(increase + 20)}>+</h3>
        </div>
      </div>
      <div className="mainContent">
        {/* <input type="text-area" style={inputStyles} /> */}
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          style={inputStyles}
        ></textarea>
      </div>
    </div>
  );
}

export default App;
