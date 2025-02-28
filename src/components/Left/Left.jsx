import { useState } from "react";

const Left = () => {
  const [leftData, setLeftData] = useState("");

  const changeLeftData = (event) => {
    setLeftData(event.target.value);
  };

  return (
    <div className="left">
      <input
        type="text"
        id="left"
        value={leftData}
        onChange={changeLeftData}
        className="form-control"
      />
      <div className="btn btn-primary">Send Data</div>
    </div>
  );
};

export default Left;
