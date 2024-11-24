import React from "react";

const FormStep1 = () => {
    return (
        <div className="bg-gray-100 p-6 min-h-screen flex items-center justify-center">
          <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl space-y-6">
            <div className="flex flex-col">
              <label htmlFor="schoolName" className="font-medium">
                School Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="schoolName"
                placeholder="Enter school name"
                className="border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
    
            <div className="flex flex-col">
              <label htmlFor="schoolAddress" className="font-medium">
                School Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="schoolAddress"
                placeholder="Enter school address"
                className="border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
    
            <div className="flex flex-col">
              <label htmlFor="delegationSize" className="font-medium">
                Delegation Size (4 to 20) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="delegationSize"
                placeholder="Enter delegation size"
                className="border border-gray-300 rounded-lg p-2"
                min="4"
                max="20"
                required
              />
            </div>
    
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="advisor1Name" className="font-medium">
                  Faculty Advisor 1 Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="advisor1Name"
                  placeholder="Enter name"
                  className="border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
    
              <div className="flex flex-col">
                <label htmlFor="advisor1Email" className="font-medium">
                  Faculty Advisor 1 Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="advisor1Email"
                  placeholder="Enter email"
                  className="border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
            </div>
    
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="advisor1Contact" className="font-medium">
                  Faculty Advisor 1 Contact No <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="advisor1Contact"
                  placeholder="Enter contact number"
                  className="border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
            </div>
    
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="advisor2Name" className="font-medium">
                  Faculty Advisor 2 Name (Optional)
                </label>
                <input
                  type="text"
                  id="advisor2Name"
                  placeholder="Enter name"
                  className="border border-gray-300 rounded-lg p-2"
                />
              </div>
    
              <div className="flex flex-col">
                <label htmlFor="advisor2Email" className="font-medium">
                  Faculty Advisor 2 Email ID (Optional)
                </label>
                <input
                  type="email"
                  id="advisor2Email"
                  placeholder="Enter email"
                  className="border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>
    
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="advisor2Contact" className="font-medium">
                  Faculty Advisor 2 Contact No (Optional)
                </label>
                <input
                  type="text"
                  id="advisor2Contact"
                  placeholder="Enter contact number"
                  className="border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>
    
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium p-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      );
    };

export default FormStep1;
