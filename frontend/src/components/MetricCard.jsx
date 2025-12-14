import React from "react";

const MetricCard = ({ icon, label, value, unit }) => {
  return (
    <div className="bg-white rounded-xl p-4 h-28 shadow-sm flex gap-3 items-center">
      <img src={icon} alt={label} className="h-10 w-10" />

      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-lg font-semibold">
          {value} <span className="text-sm font-normal">{unit}</span>
        </p>
      </div>
    </div>
  );
};

export default MetricCard;