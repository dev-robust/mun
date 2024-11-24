import React from 'react';

const IndividualDelegate = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Individual Delegate Registration
        </h2>
        <form className="space-y-4">
          {/* Name and Age */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name *</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Age *</label>
              <input
                type="number"
                placeholder="Enter your age"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Gender and Class */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Gender *</label>
              <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Class *</label>
              <input
                type="text"
                placeholder="Enter your class"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email and School */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">School *</label>
              <input
                type="text"
                placeholder="Enter your school"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Contact Number *</label>
              <input
                type="tel"
                placeholder="Enter your contact number"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Alternate Contact Number *
              </label>
              <input
                type="tel"
                placeholder="Enter alternate contact number"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload School ID *
            </label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* MUN Experience */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Previous MUN Experience (If Any) *
            </label>
            <textarea
              rows="3"
              placeholder="Describe your experience"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Committee Preferences */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Committee Preference 1 *
            </label>
            <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select committee</option>
              <option value="committee1">Committee 1</option>
              <option value="committee2">Committee 2</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Give 3 Portfolio Preferences for Committee Preference 1 *
            </label>
            <textarea
              rows="3"
              placeholder="Enter portfolio preferences"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded font-medium hover:bg-blue-600"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default IndividualDelegate;
