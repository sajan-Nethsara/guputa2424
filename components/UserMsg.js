import React from "react";

const UserMsg = ({ prompt }) => {
  return (
    <div className=" flex flex-col justify-end bg-[#5d18dc36] items-start rounded-2xl my-3 mr-2 px-4 py-2">
      <div className="self-end font-semibold text-[14px] ">
      මං ~
      </div>
      {prompt}
    </div>
  );
};

export default UserMsg;
