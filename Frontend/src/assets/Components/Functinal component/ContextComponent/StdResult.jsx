import { useContext } from "react";
import { ThemeProvider } from "../UseContext";
var StdResult = () => {
  var result = useContext(ThemeProvider);
  return (
    <section>
      <h3>Your Result is: {result.sgpa}</h3>
    </section>
  );
};
export default StdResult;

