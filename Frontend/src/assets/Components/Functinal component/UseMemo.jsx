import { useState, useMemo } from "react";
var slowFunction = (number) => {
  console.log("Running slow function");
  for (let i = 0; i < 1000000000; i++) {} // Simulate a delay
  return number * 2;
};
var UseMemo = () => {
  var [num, setNum] = useState(0);
  var [theme, updateTheme] = useState(true);
  var darkLight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var doublingNumber = useMemo(() => slowFunction(num), [num]);
  return (
    <section>
      <h1>This is useMemo Example</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <button onClick={() => updateTheme(!theme)}>Toggle Theme</button>
      <h2 style={darkLight}>Theme: {theme ? "Dark" : "Light"}</h2>
      <h3>Result: {doublingNumber}</h3>
    </section>
  );
};
export default UseMemo;