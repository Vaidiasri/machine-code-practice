import { useState } from "react";

const Guess = () => {
  // Random number sirf ek baar generate hoga
  const [target] = useState(() => Math.floor(Math.random() * 100) + 1);

  const [user, setUser] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const checkValue = () => {
    const guess = Number(user);

    if (guess === target) {
      setResult("🎉 Correct Guess!");
    } else if (guess < target) {
      setResult("📉 Too Low!");
    } else {
      setResult("📈 Too High!");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter your guess"
        value={user}
        onChange={handleChange}
      />

      <button onClick={checkValue}>Check</button>

      <h2>{result}</h2>
    </div>
  );
};

export default Guess;