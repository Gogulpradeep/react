











import React, { useState, useMemo, useEffect } from "react";

const Optimization = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      padding: "20px",
      textAlign: "center",
      minHeight: "100vh",
    };
  }, [dark]); 

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]); 

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
      <div>{doubleNumber}</div>
    </div>
  );
};

export default Optimization; 
;


function slowFunction(num) {
  console.log("Calling slow function...");
  for (let i = 0; i < 1000000000; i++) {} 
  return num * 2;
}

