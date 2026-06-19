import { useState } from "react";

const Accordion = () => {
  const accordionData = [
    {
      id: 1,
      title: "What is React?",
      content: "React is a JavaScript library.",
    },
    {
      id: 2,
      title: "What is useState?",
      content: "useState is a React Hook.",
    },
  ];

  const [selectedId, setSelectedId] = useState(accordionData[0]);
  const [hide, setHide] = useState(true);

  const handleClick = (id) => {
    if (selectedId === id) {
      // Same item clicked -> toggle hide/show
      setHide(!hide);
    } else {
      // Different item clicked -> show new item
      setSelectedId(id);
      setHide(false);
    }
  };

  return (
    <div>
      {accordionData.map((item) => (
        <div key={item.id}>
          <button onClick={() => handleClick(item.id)}>
            {item.title}
          </button>

          {selectedId === item.id && !hide && (
            <p>{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;