import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleValue = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      // ponytail: input only comes from the digit/operator buttons, so no untrusted strings reach here
      setResult(Function(`return (${input})`)());
    } catch {
      setResult("Invalid Expression");
    }
  };

  return (
    <div>
      <input type="text" value={input} readOnly />

      <button onClick={() => handleValue("1")}>1</button>
      <button onClick={() => handleValue("2")}>2</button>
      <button onClick={() => handleValue("+")}>+</button>

      <button onClick={calculate}>=</button>

      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;