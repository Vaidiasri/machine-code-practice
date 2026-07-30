import { useEffect, useState } from "react";

const GridLight = () => {
  const [grid, setGrid] = useState(2);
  const [delay, setDelay] = useState(300);

  // Store each box state
  const [boxes, setBoxes] = useState(Array(4).fill(false));

  // Reset boxes whenever grid changes
  useEffect(() => {
    setBoxes(Array(grid * grid).fill(false));
  }, [grid]);

  const handleGrid = (e) => {
    setGrid(Number(e.target.value));
  };

  const handleDelay = (e) => {
    setDelay(Number(e.target.value));
  };

  const handleClick = (index) => {
    // Prevent clicking same box again
    if (boxes[index]) return;

    const newBoxes = [...boxes];
    newBoxes[index] = true;

    setBoxes(newBoxes);

    // Check if all boxes are green
    const allSelected = newBoxes.every((box) => box);

    if (allSelected) {
      setTimeout(() => {
        setBoxes(Array(grid * grid).fill(false));
      }, delay);
    }
  };

  return (
    <>
      <div>
        <h2>Grid Size : {grid} x {grid}</h2>

        <input
          type="range"
          min="2"
          max="4"
          value={grid}
          onChange={handleGrid}
        />

        <h2>Delay : {delay} ms</h2>

        <input
          type="range"
          min="300"
          max="700"
          step="100"
          value={delay}
          onChange={handleDelay}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${grid},80px)`,
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {boxes.map((box, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "80px",
              height: "80px",
              border: "1px solid black",
              backgroundColor: box ? "green" : "lightgray",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default GridLight;