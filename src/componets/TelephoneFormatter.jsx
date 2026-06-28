import { useState } from "react";

const TelephoneFormatter = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    // Remove everything except digits
    let digits = e.target.value.replace(/\D/g, "");

    // Allow only 10 digits
    digits = digits.slice(0, 10);

    let formatted = "";

    if (digits.length > 3) {
      formatted = `+(${digits.slice(0, 3)}) - ${digits.slice(3)}`;
    } else {
      formatted = digits;
    }

    setInput(formatted);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Number"
        value={input}
        onChange={handleInput}
      />

      <p>{input}</p>
    </div>
  );
};

export default TelephoneFormatter;