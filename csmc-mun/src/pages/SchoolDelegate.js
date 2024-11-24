import React, { useState } from "react";
import FormHeader from "../components/FormHeader";
import FormStep1 from "../components/FormStep1";
import FormStep2 from "../components/FormStep2";
import FormStep3 from "../components/FormStep3";
const SchoolDelegate = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => setStep((prev) => prev + 1);
    const handlePrevious = () => setStep((prev) => prev - 1);
  
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <FormHeader step={step} />
        <div className="bg-white shadow-md rounded-lg p-6 mt-4 max-w-3xl mx-auto">
          {step === 1 && <FormStep1 />}
          {step === 2 && <FormStep2 />}
          {step === 3 && <FormStep3 />}
        </div>
        <div className="flex justify-between max-w-3xl mx-auto mt-4">
          {step > 1 && (
            <button
              onClick={handlePrevious}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Previous
            </button>
          )}
          {step < 3 && (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    );
  };

export default SchoolDelegate;
