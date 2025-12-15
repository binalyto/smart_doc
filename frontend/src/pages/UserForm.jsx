import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import MainLayout from "../layouts/MainLayout";

const UserForm = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const photo = state?.photo;

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
  });

  //   if (!photo) {
  //     navigate("/");
  //     return null;
  //   }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/scan/face/results", {
      state: {
        ...formData,
        photo,
      },
    });
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              Patient Information
            </h2>
            <p className="text-sm text-gray-500">
              Please provide your details to continue with the medical
              assessment.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-300 px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="Enter your mobile number"
                className="w-full rounded-lg border border-gray-300 px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
               City
              </label>
              <input
                type="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="Enter your city"
                className="w-full rounded-lg border border-gray-300 px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Footer note */}
            <p className="text-xs text-gray-500 text-center">
              Your information is kept confidential and used only for medical
              assessment purposes.
            </p>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition font-medium"
            >
              Proceed to Results
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserForm;
