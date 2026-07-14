import { useEffect, useRef, useState } from "react";

const Traffic = () => {
  const [currentLight, setCurrentLight] = useState("red");
  const [timeLeft, setTimeLeft] = useState(5);
  const mounted = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime === 1 ? 5 : prevTime - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (timeLeft === 5) {
      setCurrentLight((prevLight) => (prevLight === "red" ? "green" : "red"));
    }
  }, [timeLeft]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Traffic Light</h1>

      <div
        style={{
          width: "100px",
          background: "black",
          padding: "20px",
          borderRadius: "10px",
          margin: "20px auto",
        }}
      >
        {/* Red */}
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            margin: "10px auto",
            backgroundColor:
              currentLight === "red" ? "red" : "#555",
          }}
        />

        {/* Green */}
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            margin: "10px auto",
            backgroundColor:
              currentLight === "green" ? "green" : "#555",
          }}
        />
      </div>

      <h2>{currentLight.toUpperCase()}</h2>
      <h3>Next Change In: {timeLeft}s</h3>
    </div>
  );
};

export default Traffic;