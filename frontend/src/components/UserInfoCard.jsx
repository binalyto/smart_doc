import React from "react";

const UserInfoCard = ({ name, date }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm flex gap-4 items-center">
      <div
        className="h-12 w-12 rounded-full bg-blue-100
                      flex items-center justify-center font-semibold text-blue-600"
      >
        {initials}
      </div>

      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default UserInfoCard;
