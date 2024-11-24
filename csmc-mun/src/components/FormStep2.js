import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const FormStep2 = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile && selectedFile.type === "application/pdf") {
        setFile(selectedFile);
        setError("");
      } else {
        setError("Only PDF files are allowed.");
        setFile(null);
      }
    };
  
    
  
    
  
    return (
      <div className="bg-gray-100 p-6 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">School Delegation Registration</h1>
  
          {/* Step Indicator */}
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Page 1</div>
            <div className="flex-grow h-[2px] bg-gray-300 mx-2" />
            <div className="text-sm font-medium text-blue-600">Page 2</div>
            <div className="flex-grow h-[2px] bg-gray-300 mx-2" />
            <div className="text-sm font-medium">Finish</div>
          </div>
  
          {/* Instructions */}
          <div className="space-y-4">
            <h2 className="font-bold text-lg">Download Delegate Information Sheet To Fill</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                Kindly download the delegate information sheet by clicking the link below.
              </li>
              <li>Fill the delegate information sheet with all details as per the delegation size.</li>
              <li>Upload the filled delegate information sheet by clicking the upload button.</li>
              <li>In case of any issues, please contact: +91 9875982634</li>
            </ul>
            <a
              href="https://1drv.ms/x/c/97a327635c13ce8f/ETGj6DbhAIpIk_BnnEH7P-kB9d8i3bkz5NQjbpk9YuBXSQ?e=ufKeip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Download Delegate Information Sheet
            </a>
          </div>
  
          {/* File Upload */}
          <div className="space-y-2">
            <label className="font-bold text-lg" htmlFor="file-upload">
              Upload file <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="file-upload"
              accept=".pdf"
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              onChange={handleFileChange}
            />
            {file && <p className="text-green-500">File Uploaded: {file.name}</p>}
            {error && <p className="text-red-500">{error}</p>}
            <p className="text-sm text-gray-500">
              Kindly upload the filled sheet with participants' details here.
            </p>
          </div>
  
          {/* Portfolio Matrices */}
          <div>
            <h2 className="font-bold text-lg">Portfolio Matrices</h2>
            <p className="text-sm text-gray-500">
              Kindly visit the link below to view portfolio matrices.
            </p>
            <a
              href="https://docs.google.com/spreadsheets/d/1E75yqpk5gQnN3XsnpNr9R3Gs4o9BmN29L4XH1J1dY48/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Portfolio Matrices
            </a>
          </div>
  
          {/* Navigation Buttons */}
          
        </div>
      </div>
    );
};

export default FormStep2;
