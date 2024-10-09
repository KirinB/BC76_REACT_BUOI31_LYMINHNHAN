import React from "react";

const Item = ({ icon, title, desc }) => {
  return (
    <div className="text-center px-6 pb-6 bg-[#f8f9fa]">
      <div className="bg-[#0d6efd] w-16 h-16 inline-flex items-center justify-center text-3xl rounded-lg text-white mb-6 -mt-6">
        {icon}
      </div>
      <h2 className="font-bold text-2xl text-[#212529] mb-2">{title}</h2>
      <p className="text-base text-[#212529]">{desc}</p>
    </div>
  );
};

export default Item;
