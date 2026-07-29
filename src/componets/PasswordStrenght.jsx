import { useState } from "react";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handelPassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    let score = 0;

    // Length
    if (value.length >= 8) score++;

    // Uppercase
    if (/[A-Z]/.test(value)) score++;

    // Lowercase
    if (/[a-z]/.test(value)) score++;

    // Number
    if (/[0-9]/.test(value)) score++;

    // Special Character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) score++;

    // Strength
    if (score <= 2) {
      setStrength("Weak");
    } else if (score <= 4) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
  };

  const getColor = () => {
    if (strength === "Weak") return "red";
    if (strength === "Medium") return "orange";
    if (strength === "Strong") return "green";
    return "black";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Password Strength Checker</h2>

      <input
        type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={handelPassword}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
        }}
      />

      <p>
        <strong>Password:</strong> {password}
      </p>

      <p style={{ color: getColor(), fontWeight: "bold" }}>
        Strength: {strength}
      </p>
    </div>
  );
};

export default PasswordStrength;