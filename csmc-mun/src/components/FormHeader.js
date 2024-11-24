import React from "react";

const FormHeader = ({ step }) => {
  return (
    <div className="flex justify-between items-center max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">School Delegation Registration</h1>
      <p>Step {step} of 3</p>
    </div>
  );
};

export default FormHeader;
