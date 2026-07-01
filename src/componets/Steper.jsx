import { useState } from "react";

const Stepper = () => {
  const steps = [
    "Contact Details",
    "Shipping Address",
    "Payment",
    "Delivered",
  ];

  const [currentStep, setCurrentStep] = useState(2);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div
        style={{
          width: "90%",
          margin: "50px auto",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Gray Line */}
        <div
          style={{
            position: "absolute",
            top: "18px",
            left: 0,
            width: "100%",
            height: "4px",
            background: "#ddd",
            zIndex: 0,
          }}
        />

        {/* Green Progress */}
        <div
          style={{
            position: "absolute",
            top: "18px",
            left: 0,
            height: "4px",
            width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            background: "green",
            zIndex: 1,
            transition: "0.3s",
          }}
        />

        {steps.map((step, index) => {
          const stepNumber = index + 1;

          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "2px solid black",
                  background:
                    stepNumber < currentStep
                      ? "green"
                      : stepNumber === currentStep
                      ? "#4f46e5"
                      : "white",
                  color:
                    stepNumber < currentStep || stepNumber === currentStep
                      ? "white"
                      : "black",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {stepNumber < currentStep ? "✓" : stepNumber}
              </div>

              <p
                style={{
                  marginTop: "12px",
                  fontSize: "18px",
                }}
              >
                {step}
              </p>
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </>
  );
};

export default Stepper;