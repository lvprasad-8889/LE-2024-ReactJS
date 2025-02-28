import React, { useState } from "react";

import './TruncateText.css'

const TruncateText = ({ description }) => {
  let [text, setText] = useState(description.slice(0, 30) + "...");
  let [trimmed, setTrimmed] = useState(true);

  const updateText = (val) => {
    if (val === 0) {
      setText(description);
      setTrimmed(false);
    } else {
      setText(description.slice(0, 30) + "...");
      setTrimmed(true);
    }
  };

  return (
    <div>
      {text}


      {trimmed ? (
        <a className="text-primary" onClick={() => updateText(0)}>
          {" "}
          read more
        </a>
      ) : (
        <a className="text-primary" onClick={() => updateText(1)}>
          {" "}
          read less
        </a>
      )}
    </div>
  );
};

export default TruncateText;
