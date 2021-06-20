import React, { useState } from "react";

export const App = () => {
  const [text, setText] = useState("");
  return (
    <div>
      {/* <p data-testid="text-value"> {text} </p>

      <input
        data-testid="input-text"
        placeholder="input value"
        value={text}
        onChange={(e) => setText(e.target.value)}
      /> */}
    </div>
  );
};
