import { useEffect, useState } from "react";

const ToastPopUp = () => {
  const [position, setPosition] = useState("Left");
  const [status, setStatus] = useState("Normal");
  const [input, setInput] = useState("This is a toast message!");
  const [toast, setToast] = useState(false);

  const handelButton = () => {
    setToast(true);
  };

  // Auto hide after 3 sec
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  const getBackgroundColor = () => {
    switch (status) {
      case "Success":
        return "green";
      case "Error":
        return "red";
      case "Warning":
        return "orange";
      case "Info":
        return "blue";
      default:
        return "gray";
    }
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>Toast Popup</h2>

        <select
          onChange={(e) => setPosition(e.target.value)}
          value={position}
        >
          <option value="Left">Left</option>
          <option value="Right">Right</option>
        </select>

        <br />
        <br />

        <select onChange={(e) => setStatus(e.target.value)} value={status}>
          <option value="Normal">Normal</option>
          <option value="Success">Success</option>
          <option value="Error">Error</option>
          <option value="Warning">Warning</option>
          <option value="Info">Info</option>
        </select>

        <br />
        <br />

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter message"
        />

        <br />
        <br />

        <button onClick={handelButton}>Show Toast</button>
      </div>

      {toast && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            [position === "Left" ? "left" : "right"]: "20px",
            backgroundColor: getBackgroundColor(),
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            minWidth: "250px",
            transition: "all 0.3s ease",
          }}
        >
          <strong>{status}</strong>
          <br />
          {input}
        </div>
      )}
    </>
  );
};

export default ToastPopUp;